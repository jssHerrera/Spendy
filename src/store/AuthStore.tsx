import { create } from "zustand";
import { supabase } from "../supabase";
import type { User, Session, UserMetadata } from "@supabase/supabase-js";
import { getErrorMessage } from "../utils/getErrorMessage";

let authSubscription: { unsubscribe: () => void } | null = null;

interface AuthState {
  isAuth: boolean; // Si el usuario está autenticado
  isLoading: boolean; // Indicador de carga
  error: string | null; // Posibles errores
  user: User | null; // Información del usuario autenticado
  userMetadata: UserMetadata | null; // Información del usuario autenticado
  isInitialized: boolean; // Indica si ya se inicializó la sesión

  // Métodos disponibles en el store
  signWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  initializeAuth: () => void;
  cleanupAuth: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => {
  const updateAuthState = (session: Session | null, additionalState = {}) => {
    const user = session?.user ?? null;
    const userMetadata = session?.user?.user_metadata ?? null;
    set({
      user,
      userMetadata,
      isAuth: !!user, // true si hay usuario, false si no
      error: null,
      ...additionalState, // Permite agregar propiedades opcionales como isInitialized
    });
  };

  return {
    isAuth: false,
    isLoading: false,
    error: null,
    user: null,
    userMetadata: null,
    isInitialized: false,

    // Iniciar sesión con Google (OAuth)
    signWithGoogle: async () => {
      try {
        set({ isLoading: true, error: null });
        // Llamada a Supabase para iniciar sesión con Google
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "http://localhost:5173/admin/dashboard",
          },
        });

        if (error) throw error;
      } catch (error) {
        set({ error: getErrorMessage(error) });
        throw error; // Se vuelve a lanzar por si el frontend quiere capturarlo
      } finally {
        set({ isLoading: false });
      }
    },

    // Cierra sesión y limpia el estado de usuario
    signOut: async () => {
      try {
        set({ isLoading: true, error: null });
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        // Limpiar estado del store
        set({ isAuth: false, user: null, userMetadata: null, error: null });
      } catch (error) {
        set({ error: getErrorMessage(error) });
      } finally {
        set({ isLoading: false });
      }
    },

    // Inicializa el estado de autenticación: obtiene sesión actual y configura listener
    initializeAuth: async () => {
      // Evitar múltiples inicializaciones
      const state = get();
      if (state.isInitialized === true) return;

      try {
        set({ isLoading: true, error: null });

        // Si ya hay una suscripción previa, cancelarla
        authSubscription?.unsubscribe();

        // Obtener la sesión actual del usuario desde Supabase
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;

        // Establecer estado inicial con la sesión obtenida
        updateAuthState(session, { isInitialized: true });

        // Suscribirse a futuros cambios de autenticación
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
          // switch para manejar diferentes eventos de autenticación
          switch (event) {
            case "INITIAL_SESSION":
              console.log("🔁 Sesión inicial detectada");
              break;
            case "SIGNED_IN":
              console.log("🟢 Usuario ha iniciado sesión");
              break;
            case "SIGNED_OUT":
              console.log("🔴 Usuario ha cerrado sesión");
              break;
            case "TOKEN_REFRESHED":
              console.log("🔄 Token renovado automáticamente");
              break;
            case "USER_UPDATED":
              console.log("📝 Perfil del usuario actualizado");
              break;
            case "PASSWORD_RECOVERY":
              console.log("📧 Recuperación de contraseña iniciada");
              break;
            default:
              console.log("⚠️ Evento de auth desconocido:", event);
          }
          // console.log(session?.user?.user_metadata);
          // Actualiza el estado de autenticación cuando cambie
          updateAuthState(session);
        });

        // Guardar suscripción global para poder limpiar luego
        authSubscription = subscription;
      } catch (error) {
        set({ error: getErrorMessage(error), isInitialized: false });
      } finally {
        set({ isLoading: false });
      }
    },

    // Limpia el estado de autenticación y cancela suscripciones
    cleanupAuth: () => {
      authSubscription?.unsubscribe();
      authSubscription = null;
      set({
        isInitialized: false,
        isAuth: false,
        user: null,
        userMetadata: null,
        error: null,
      });
    },
  };
});

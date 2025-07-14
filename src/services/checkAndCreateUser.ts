import type { Session } from "@supabase/supabase-js";
import { createNewUser, getUserById } from "../supabase/crudUsuarios";

export const checkAndCreateUser = async (session: Session | null) => {
  if (!session?.user) return;
  const userId = session.user.id;

  try {
    const existingUser = await getUserById(userId);

    if (!existingUser) {
      console.log("Insertando nuevo usuario...");
      const nuevoUsuario = {
        nombre: session.user.user_metadata?.name || "Sin nombre",
        email: session.user.email || "",
        foto: session.user.user_metadata?.picture || "",
        pais: session.user.user_metadata?.pais || "",
        moneda: session.user.user_metadata?.moneda || "",
        tema: session.user.user_metadata?.tema || "",
        idauth_supabase: session.user.id,
      };
      await createNewUser(nuevoUsuario);
    } 
    return existingUser;  
  } catch (error) {
    console.error("Error en InsertNewUser:", error);
    return null;
  }
};

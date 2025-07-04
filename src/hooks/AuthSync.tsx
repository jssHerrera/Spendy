// AuthSync.tsx;
import { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";

export const AuthSync = () => {
  useEffect(() => {
    console.log("AuthSync ejecutado");

    const { initializeAuth, cleanupAuth } = useAuthStore.getState();

    initializeAuth();

    return cleanupAuth;
  }, []);

  return null;
};

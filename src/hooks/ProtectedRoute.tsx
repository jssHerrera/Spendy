import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

type ProtectedRouteProps = {
  redirectTo: string;
  children?: React.ReactNode;
};

export const ProtectedRoute = ({
  redirectTo,
  children,
}: ProtectedRouteProps) => {
  const { user, isLoading, isInitialized } = useAuthStore();

  // Mostrar loading mientras se inicializa la auth o mientras carga
  if (!isInitialized || isLoading) {
    return <div>Cargando sesión...</div>;
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

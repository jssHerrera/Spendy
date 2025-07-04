// components/GuestRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../index";

type GuestRouteProps = {
  redirectTo: string;
  children?: React.ReactNode;
};

export const GuestRoute = ({ redirectTo, children }: GuestRouteProps) => {
  const { user, isLoading, isInitialized } = useAuthStore();
  if (!isInitialized || isLoading) return <div>Cargando sesión...</div>;
  if (user) return <Navigate to={redirectTo} replace />;
  return children ? children : <Outlet />;
};

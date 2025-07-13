import { Navigate } from "react-router-dom";

import { DashboardLayout } from "../components";
import { ProtectedRoute } from "../hooks";
import {
  Home,
  Categorias,
  Informes,
  Movimientos,
  Dashboard,
} from "./lazyPages";

export const privateRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute redirectTo="/auth/login">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home", // /admin/home
        element: <Home />,
      },
      {
        path: "categorias", // /admin/categorias
        element: <Categorias />,
      },
      {
        path: "movimientos", // /admin/movimientos
        element: <Movimientos />,
      },
      {
        path: "informes", // /admin/informes
        element: <Informes />,
      },
      {
        path: "dashboard", // /admin/dashboard
        element: <Dashboard />,
      },
    ],
  },
];

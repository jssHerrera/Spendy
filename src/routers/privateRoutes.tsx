import { Navigate } from "react-router-dom";
import { DashboardLayout } from "../components";
import { Dashboard, ErrorFallback } from "../pages";
import { ProtectedRoute } from "../hooks";

export const privateRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute redirectTo="/auth/login">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

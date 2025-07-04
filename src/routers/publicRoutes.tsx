import { Navigate } from "react-router-dom";
import { LandingLayout, AuthLayout } from "../components";
import { Home, Login } from "../pages";
import { GuestRoute } from "../hooks";

export const publicRoutes = [
  {
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <GuestRoute redirectTo="/admin/dashboard">
        <AuthLayout />
      </GuestRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

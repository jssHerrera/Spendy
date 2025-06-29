import { Navigate } from "react-router-dom";
import { Home, Login, LandingLayout, AuthLayout } from "../index";

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
    element: <AuthLayout />,
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

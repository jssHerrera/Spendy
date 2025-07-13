import { Navigate } from "react-router-dom";
import { LandingLayout, AuthLayout } from "../components";
import { Login, MainPage } from "./lazyPages";
import { GuestRoute } from "../hooks";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "home",
        element: <MainPage />,
        metadata: { title: "Home" },
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <GuestRoute redirectTo="/admin/home">
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

// export const publicRoutes = [
//   {
//     element: <LandingLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: (
//       <GuestRoute redirectTo="/admin/dashboard">
//         <AuthLayout />
//       </GuestRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Navigate to="login" replace />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ];

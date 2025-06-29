import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { ErrorPage } from "../index";

export const router = createBrowserRouter([
  ...publicRoutes,
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

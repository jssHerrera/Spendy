import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { ErrorPage } from "../components";
import { privateRoutes } from "./privateRoutes";

export const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

import { lazy } from "react";

// Public pages (publicas)
export const MainPage = lazy(() => import("../pages/public/MainPage"));
export const Login = lazy(() => import("../pages/auth/Login"));


// Admin pages (privadas)
export const Home = lazy(() => import("../pages/admin/Home"));
export const Categorias = lazy(() => import("../pages/admin/Categorias"));
export const Informes = lazy(() => import("../pages/admin/Informes"));
export const Movimientos = lazy(() => import("../pages/admin/Movimientos"));
export const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

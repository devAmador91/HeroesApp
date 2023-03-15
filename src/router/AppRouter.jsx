import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/";
import { HeroesRoutes, childHeroesRoutes } from "../heroes/routes/";
import { PrivateRoutes } from "../heroes/routes/PrivateRoutes";
import { PublicRoutes } from "../heroes/routes/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoutes> <LoginPage /> </PublicRoutes>,
  },
  {
    path: "/",
    element: <PrivateRoutes> <HeroesRoutes /> </PrivateRoutes>,
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  );
};

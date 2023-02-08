import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/";
import { HeroesRoutes, childHeroesRoutes } from "../heroes/routes/";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <HeroesRoutes />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childHeroesRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

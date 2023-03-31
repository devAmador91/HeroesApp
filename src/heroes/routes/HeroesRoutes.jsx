import { Outlet } from "react-router-dom";
import { MarvelPage, DCPages, SearchPage, HeroPage } from "..";
import { Navbar } from "../../Ui/";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export const childHeroesRoutes = [
  {
    index: true,
    element: <MarvelPage />,
  },
  {
    path: "/marvel",
    element: <MarvelPage />,
  },
  {
    path: "/dc",
    element: <DCPages />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/hero/:heroId",
    element: <HeroPage />,
  },
  {
    path: "/*",
    element: <MarvelPage />,
  },
];

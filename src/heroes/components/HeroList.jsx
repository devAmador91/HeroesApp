import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(3, 1fr)",
        "grid-gap": "20px",
        "grid-auto-rows": "minmax(200px, auto)",
      }}
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

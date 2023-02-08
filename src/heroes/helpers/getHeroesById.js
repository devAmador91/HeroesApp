import { heroes } from "../data/heroes";

export const getHeroesById = (heroId) => {
  return heroes.find((heroe) => heroe.id === heroId);
};

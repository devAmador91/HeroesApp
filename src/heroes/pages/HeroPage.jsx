import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";

export const HeroPage = () => {
  const { heroId } = useParams();
  const heroe = useMemo(()=> getHeroesById(heroId), [heroId]);
  const heroUrl = `/assets/heroes/${heroId}.jpg`;
  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroUrl}
          alt={heroe.superhero}
          className="img-thumbnail  animate__animated animate__fadeInLeft"
        ></img>
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b>
            {heroe.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b>
            {heroe.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearence: </b>
            {heroe.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{heroe.characters}</p>
        <button className="btn btn-outline-primary" onClick={onReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

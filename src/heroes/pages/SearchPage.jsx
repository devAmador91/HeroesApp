import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useQuery } from "../../hooks/useQuery";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = ()=> {
  const { q } = useQuery();

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const navigate = useNavigate();
  const heroes = getHeroesByName(q); 
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const {search} = useLocation();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(search.slice(3) === searchText) return
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit} aria-label="form">
            <input
              data-testid="search-input"
              type={"text"}
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            ></input>
            <button className="btn btn-outline-primary mt-1" aria-label="search-button">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div aria-label="div-hidden"
            className="alert alert-danger animate__animated animate__wobble"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

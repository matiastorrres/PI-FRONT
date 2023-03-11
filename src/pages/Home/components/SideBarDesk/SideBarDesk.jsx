import "./SideBarDesk.css";
import { useIsWide } from "../../hook/useIsWide";
import { useState, useEffect, useId, useContext } from "react";
import { VideogamesContext } from "../../context/videogames";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const SideBarDesk = () => {
  const { isWide } = useIsWide();
  const [genres, setGenres] = useState([]);
  const { ordervideogames, filterVideogames, order, filter, setFilter } =
    useContext(VideogamesContext);

  const relevance = useId();
  const az = useId();
  const za = useId();
  const higherRating = useId();
  const lowerRating = useId();
  const all = useId();

  useEffect(() => {
    fetch("http://localhost:3001/genre")
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);

  if (!isWide) return;

  return (
    <section className="sideBarDesk__container">
      <article className="sideBarDesk__wrapper">
        <h3 className="sideBarDesk__title">Order</h3>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="order"
            id={relevance}
            value="relevance"
            checked={order === "relevance"}
            onChange={(e) => {
              ordervideogames(e.target.value);
            }}
          />
          <label htmlFor={relevance}>Relevance</label>
        </div>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="order"
            id={az}
            value="a-z"
            checked={order === "a-z"}
            onChange={(e) => {
              ordervideogames(e.target.value);
            }}
          />
          <label htmlFor={az}>A-Z</label>
        </div>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="order"
            id={za}
            value="z-a"
            checked={order === "z-a"}
            onChange={(e) => {
              ordervideogames(e.target.value);
            }}
          />
          <label htmlFor={za}>Z-A</label>
        </div>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="order"
            id={higherRating}
            value="higher rating"
            checked={order === "higher rating"}
            onChange={(e) => {
              ordervideogames(e.target.value);
            }}
          />
          <label htmlFor={higherRating}>HIGHER RATING</label>
        </div>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="order"
            id={lowerRating}
            value="lower rating"
            checked={order === "lower rating"}
            onChange={(e) => {
              ordervideogames(e.target.value);
            }}
          />
          <label htmlFor={lowerRating}>LOWER RATING</label>
        </div>
        <h3 className="sideBarDesk__title">Genres</h3>
        <div className="sideBarDesk__item">
          <input
            type="radio"
            name="filter"
            id={all}
            value={"all"}
            checked={filter === "all"}
            onChange={(e) => {
              setFilter(e.target.value);
              filterVideogames(e.target.value);
            }}
            style={{ display: "none" }}
          />
          <label htmlFor={all}>All</label>
        </div>
        {genres.map((el) => (
          <div key={el} className="sideBarDesk__item">
            <input
              type="radio"
              name="filter"
              id={el}
              value={el}
              onChange={(e) => {
                filterVideogames(e.target.value);
              }}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}
      </article>
    </section>
  );
};

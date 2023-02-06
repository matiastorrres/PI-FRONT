import "./SideBarDesk.css";
import { useIsWide } from "../../hook/useIsWide";
import { useState, useEffect } from "react";

export const SideBarDesk = () => {
  const { isWide } = useIsWide();
  const [genres, setGenres] = useState([]);
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
          <span>A-Z</span>
          <input type="radio" />
        </div>
        <div className="sideBarDesk__item">
          <span>Z-A</span>
          <input type="radio" />
        </div>
        <div className="sideBarDesk__item">
          <span>HIGHER RATING</span>
          <input type="radio" />
        </div>
        <div className="sideBarDesk__item">
          <span>LOWER RATING</span>
          <input type="radio" />
        </div>
        <h3 className="sideBarDesk__title">filter</h3>
        {genres.map((el) => (
          <div key={el} className="sideBarDesk__item">
            {el}
          </div>
        ))}
      </article>
    </section>
  );
};

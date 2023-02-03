import { Card } from "../Card/Card";
import "./CardsContainer.css";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

export const CardsContainer = () => {
  const { allVideogames } = useContext(HomeContext);

  return (
    <section className="container__cards">
      {allVideogames.map((el) => (
        <Card
          name={el.name}
          background_image={el.background_image}
          genres={el.genres}
          rating={el.rating}
          platforms={el.platforms}
          key={el.id}
        />
      ))}
    </section>
  );
};

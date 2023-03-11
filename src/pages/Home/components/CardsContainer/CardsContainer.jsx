import { Card } from "../Card/Card";
import "./CardsContainer.css";
import { useContext } from "react";
import { VideogamesContext } from "../../context/videogames";

export const CardsContainer = () => {
  const { currentVideogames } = useContext(VideogamesContext);

  return (
    <section className="container__cards">
      {currentVideogames.length === 0
        ? "no se encontraron resultados"
        : currentVideogames.map((el) => (
            <Card
              name={el.name}
              background_image={el.background_image}
              genres={el.genres}
              rating={el.rating}
              platforms={el.platforms}
              key={el.id}
              id={el.id}
            />
          ))}
    </section>
  );
};

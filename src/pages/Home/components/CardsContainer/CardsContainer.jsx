import { Card } from "../Card/Card";
import "./CardsContainer.css";
import PropTypes from "prop-types";

export const CardsContainer = ({ currentVideogames }) => {
  return (
    <section className="container__cards">
      {currentVideogames &&
        currentVideogames.map((el) => (
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

CardsContainer.propTypes = {
  currentVideogames: PropTypes.array,
};

import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ name, background_image, genres, rating, platforms }) => {
  return (
    <section className="card__Container">
      <img src={background_image} alt={name} className="card__img" />
      {/* TODO:// reemplazar por sus iconos */}
      <div className="card__platforms">
        {platforms?.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <h3 className="card__title">{name}</h3>
      <article className="card__article">
        <p>Genres: </p>
        <div className="card__items">
          {genres.map((el) => (
            <p className="card__item" key={el}>
              {el}
            </p>
          ))}
        </div>
      </article>
      <article className="card__article">
        <p>Rating: </p>
        <p> {rating}</p>
      </article>
    </section>
  );
};

Card.prototype = {
  name: PropTypes.string,
  background_image: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.string,
  platforms: PropTypes.arrayOf(PropTypes.string),
};

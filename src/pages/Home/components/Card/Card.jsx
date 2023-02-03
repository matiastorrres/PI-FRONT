import PropTypes from "prop-types";
import "./Card.css";
export const Card = ({
  name = "Grand Theft Auto V",
  background_image = "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  genres = ["Action", "Adventure"],
  rating = "4.47",
  platforms = [
    "PlayStation 5",
    "Xbox Series S/X",
    "PlayStation 4",
    "PC",
    "PlayStation 3",
    "Xbox 360",
    "Xbox One",
  ],
}) => {
  return (
    <section className="card__Container">
      <img src={background_image} alt={name} className="card__img" />
      {/* reemplazar por sus iconos */}
      <div className="card__platforms">
        {platforms.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <h3 className="card__title">{name}</h3>
      <div className="card__genres">
        <p className="genre__title">Genres: </p>
        <div className="genre__items">
          {genres.map((el) => (
            <p className="genre__item" key={el}>
              {el}
            </p>
          ))}
        </div>
      </div>
      <div className="card__rating">
        <p>Rating: </p>
        <p> {rating}</p>
      </div>
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

import { useEffect, useState } from "react";
import "./MiniCard.css";
export const MiniCard = ({ name }) => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/videogame?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setSearch(data);
      });
  }, [name]);

  return (
    <section className="miniCard__container">
      {search.map((el) => (
        <div className="miniCard__wrapper" key={el.name}>
          <img
            src={el.background_image}
            alt="img_card"
            className="miniCard__img"
          />
          <div>{el.name}</div>
        </div>
      ))}
    </section>
  );
};

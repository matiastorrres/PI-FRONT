import { useEffect, useState } from "react";
import "./ModalFilter.css";

const Option = ({ dataArray }) => {
  return (
    <ul className="option__container">
      {dataArray.map((el) => (
        <li key={el} className="option__item">
          {el}
        </li>
      ))}
    </ul>
  );
};

export const ModalFilter = ({ setShowFilter }) => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/genre")
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    console.log("aca no enntre todavia");
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.matches(".filter")) return;
    if (e.target.matches(".filter *")) return;
    if (!e.target.matches(".filter__dropdown")) {
      console.log("entro a cerrar");
      setShowFilter(false);
      document.body.style.overflowY = "visible";
    }
    if (!e.target.matches(".filter__dropdown *")) {
      console.log("entro a cerrar");
      setShowFilter(false);
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <section className="modalFilter__container">
      <menu className="filter__dropdown">
        <h3>Genres</h3>
        <Option dataArray={genres} />
      </menu>
    </section>
  );
};

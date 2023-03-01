import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { MiniCard } from "../MiniCard/MiniCard";

export const Search = ({ name, setName }) => {
  return (
    <section className="search__container">
      <form className="search__form">
        <article className="search__wrapper">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fontAwesomeGlass"
          />
          <input
            type="text"
            placeholder="Search"
            className="search__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faX}
            className="fontAwesomefaX"
            onClick={() => {
              setName("");
            }}
          />
        </article>
      </form>
      <article>
        <MiniCard name={name} />
      </article>
    </section>
  );
};

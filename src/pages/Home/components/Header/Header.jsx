import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../Menu/Menu";
import { useIsWide } from "../../hook/useIsWide";
import "./Header.css";

export const Header = ({ setAllVidegames }) => {
  /*estados para logica de buscador*/
  const [name, setName] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);

  /*estado para mostrar o no menu*/
  const [showMenu, setShowMenu] = useState(false);

  /*ocultar los componentes segun las medidas de la ventana*/
  const { isWide } = useIsWide();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length <= 0) return;
    if (!name) return;
    if (isRequesting) return;
    setIsRequesting(true);
    fetch(`http://localhost:3001/videogame?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        setName("");
        setAllVidegames(data);
        setIsRequesting(false);
      });
  };

  /*logica para mostrar menu y ocultar el scroll*/
  const handleMenu = () => {
    setShowMenu(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <header className="header__container">
      <div className="header__wrapper">
        <button
          onClick={() => window.location.reload()}
          className="header__title"
        >
          GAMES
        </button>
        <nav className="header__nav">
          <form className="header__search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your game"
              className="header__search-inputText"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="submit"
              value="Search"
              className="header__search-inputSubmit"
              disabled={name ? false : true}
            />
          </form>
          {isWide ? (
            <div className="header__nav-wrapper-desk">
              <Link to="/create">CREATE VIDEOGAME</Link>
              <Link to="/create">LOG IN</Link>
              <Link to="/create">SIGN UP</Link>
            </div>
          ) : (
            <div className="header__nav-wrapper-mobile" onClick={handleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </nav>
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </header>
  );
};

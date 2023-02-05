import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../Menu/Menu";
import { useIsWide } from "../../hook/useIsWide";
export const Header = ({ setAllVidegames }) => {
  const [name, setName] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const { isWide } = useIsWide();

  const refreshPage = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entra", isRequesting);
    if (name.trim().length <= 0) return;
    if (!name) return;
    if (isRequesting) return;
    setIsRequesting(true);
    fetch(`http://localhost:3001/videogame?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setName("");
        setAllVidegames(data);
        setIsRequesting(false);
      });
  };

  const handleMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="header__container">
      <div className="header__wrapper">
        <button onClick={refreshPage} className="header__title">
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
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </header>
  );
};

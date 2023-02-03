import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Menu } from "../Menu/Menu";
export const Header = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 980px)");
    const handleMediaQueryChange = (event) => {
      setIsWide(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <header className="header__container">
      <div className="header__wrapper">
        <button onClick={refreshPage} className="header__title">
          GAMES
        </button>
        <nav className="header__nav">
          <form className="header__search">
            <input
              type="text"
              placeholder="Find your game"
              className="header__search-input"
            />
          </form>
          {isWide ? (
            <div className="header__nav-wrapper-desk">
              <Link to="/create">CREATE VIDEOGAME</Link>
              <Link to="/create">LOG IN</Link>
              <Link to="/create">SIGN UP</Link>
            </div>
          ) : (
            <div className="header__nav-wrapper-mobile">
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </nav>
      </div>
      {/* <Menu /> */}
    </header>
  );
};

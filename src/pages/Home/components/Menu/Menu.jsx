import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faX,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const Menu = ({ setShowMenu }) => {
  /*logica de ocultar menu y desbloquear el scroll*/
  const handleClick = () => {
    document.body.style.overflow = "visible";
    setShowMenu(false);
  };

  return (
    <section className="dropdown__container">
      <menu className="dropdown__menu">
        <article className="dropdown__item-home">
          <p>HOME</p>
          <FontAwesomeIcon icon={faX} onClick={handleClick} />
        </article>
        <article className="dropdown__item">
          <FontAwesomeIcon icon={faRightToBracket} />
          <p>login</p>
        </article>
        <article className="dropdown__item">
          <FontAwesomeIcon icon={faUserPlus} />
          <p>Sing Up</p>
        </article>
        <article className="dropdown__item">
          <FontAwesomeIcon icon={faPlus} />
          <p>Create videogame</p>
        </article>
      </menu>
    </section>
  );
};

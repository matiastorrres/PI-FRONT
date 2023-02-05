import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const Menu = ({ setShowMenu, showMenu }) => {
  if (showMenu) return;
  return (
    <section className="dropdown__container">
      <menu className="dropdown__menu">
        <article className="dropdown__item-home">
          <p>HOME</p>
          <FontAwesomeIcon icon={faX} onClick={() => setShowMenu(true)} />
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

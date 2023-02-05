import "./ModalOrder.css";
import { useEffect } from "react";

export const ModalOrder = ({ setShowOrder }) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // No puedo hacer eso
  const handleClick = (e) => {
    if (e.target.matches(".order")) return;
    if (e.target.matches(".order *")) return;
    if (!e.target.matches(".order__dropdown")) {
      setShowOrder(false);
    }
    if (!e.target.matches(".order__dropdown *")) {
      setShowOrder(false);
    }
  };
  return (
    <section className="modalOrder__container">
      <menu className="order__dropdown">
        <h3 className="order__title">Sort by</h3>
        <article>
          <span>A-Z</span>
          <input type="radio" />
        </article>
        <article>
          <span>Z-A</span>
          <input type="radio" />
        </article>
        <article>
          <span>HIGHER RATING</span>
          <input type="radio" />
        </article>
        <article>
          <span>LOWER RATING</span>
          <input type="radio" />
        </article>
      </menu>
    </section>
  );
};

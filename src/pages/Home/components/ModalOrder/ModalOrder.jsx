import "./ModalOrder.css";
import { useEffect, useId } from "react";

export const ModalOrder = ({ setShowOrder }) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.matches(".order")) return;
    if (e.target.matches(".order *")) return;
    if (!e.target.matches(".order__dropdown")) {
      console.log("entro a cerrar");
      setShowOrder(false);
      document.body.style.overflowY = "visible";
    }
    if (!e.target.matches(".order__dropdown *")) {
      console.log("entro a cerrar");
      setShowOrder(false);
      document.body.style.overflowY = "visible";
    }
  };
  const relevance = useId();
  const az = useId();
  const za = useId();
  const higherRating = useId();
  const lowerRating = useId();
  return (
    <section className="modalOrder__container">
      <menu className="order__dropdown">
        <h3 className="order__title">Sort by</h3>
        <div>
          <input type="radio" name="order" id={relevance} />
          <label htmlFor={relevance}>Relevance</label>
        </div>
        <div>
          <input type="radio" name="order" id={az} />
          <label htmlFor={az}>A-Z</label>
        </div>
        <div>
          <input type="radio" name="order" id={za} />
          <label htmlFor={za}>Z-A</label>
        </div>
        <div>
          <input type="radio" name="order" id={higherRating} />
          <label htmlFor={higherRating}>HIGHER RATING</label>
        </div>
        <div>
          <input type="radio" name="order" id={lowerRating} />
          <label htmlFor={lowerRating}>LOWER RATING</label>
        </div>
      </menu>
    </section>
  );
};

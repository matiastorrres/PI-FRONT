import "./ModalOrder.css";
import { useEffect } from "react";

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
  return (
    <section className="modalOrder__container">
      <menu className="order__dropdown">
        <h3 className="order__title">Sort by</h3>
        <div>
          <span>A-Z</span>
          <input type="radio" />
        </div>
        <div>
          <span>Z-A</span>
          <input type="radio" />
        </div>
        <div>
          <span>HIGHER RATING</span>
          <input type="radio" />
        </div>
        <div>
          <span>LOWER RATING</span>
          <input type="radio" />
        </div>
      </menu>
    </section>
  );
};

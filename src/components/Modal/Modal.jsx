import "./Modal.css";
import { useRef } from "react";

/*aprender la logica*/
const Modal = ({ childre, title, root }) => {
  const ref = useRef(null);

  const handleCloseModal = () => {
    ref.current.classList.add("modal__fadeOut");
    ref.current.addEventListener(
      "animationend",
      (e) => {
        root.unmount();
        document.querySelector("#modal").remove();
      },
      { once: true }
    );
  };
  return (
    <section ref={ref} className="modal__container">
      <article className="modal__View">
        <header className="modal__Header">
          <h2>{title}</h2>
          <button className="modal__closeButton" onClick={handleCloseModal}>
            X
          </button>
        </header>
        <article>{childre}</article>
      </article>
    </section>
  );
};
export default Modal;

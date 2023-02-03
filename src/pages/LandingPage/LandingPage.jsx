import PropTypes from "prop-types";
import landingImg from "@/assets/img/landing.jpg";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = ({
  title = "WELCOME TO VIDEOGAMES",
  img = landingImg,
  textBtn = "Play",
  path = "home",
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(path);
  return (
    <section className="landingPage__container">
      <img src={img} alt="img-landingPage" className="landingPage__img" />
      <div className="landingPage__itemContainer">
        <h2 className="landingPage__title">{title}</h2>
        <button className="landingPage__btn" onClick={handleNavigate}>
          {textBtn}
        </button>
      </div>
    </section>
  );
};
LandingPage.prototype = {
  title: PropTypes.string,
  img: PropTypes.string,
  textBtn: PropTypes.string,
  path: PropTypes.string,
};

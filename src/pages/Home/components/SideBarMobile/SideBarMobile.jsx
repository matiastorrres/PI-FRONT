import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useIsWide } from "../../hook/useIsWide";
import { ModalFilter } from "../ModalFilter/ModalFilter";
import "./SideBarMobile.css";

export const SideBarMovile = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const { isWide } = useIsWide();

  const handleClickOrder = () => {
    setShowOrder(true);
    document.body.style.overflowY = "hidden";
  };
  const handleClickFilter = () => {
    setShowFilter(true);
    document.body.style.overflowY = "hidden";
  };

  if (isWide) return;
  return (
    <>
      <section className="sideBarMobile__container">
        <button className="sideBarMobile__btn order" onClick={handleClickOrder}>
          <p>Order</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <button
          className="sideBarMobile__btn filter"
          onClick={handleClickFilter}
        >
          <p>Filter</p>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </section>
      {showOrder && <ModalOrder setShowOrder={setShowOrder} />}
      {showFilter && <ModalFilter setShowFilter={setShowFilter} />}
    </>
  );
};

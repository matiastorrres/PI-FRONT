import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./SideBarMobile.css";
import { useState } from "react";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useIsWide } from "../../hook/useIsWide";

export const SideBarMovile = () => {
  // const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const { isWide } = useIsWide();

  if (isWide) return;
  return (
    <>
      <section className="sideBarMobile__container">
        <button
          className="sideBarMobile__btn order"
          onClick={() => setShowOrder(true)}
        >
          <p>Order</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <button className="sideBarMobile__btn">
          <p>Filter</p>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </section>
      {showOrder && (
        <ModalOrder showOrder={showOrder} setShowOrder={setShowOrder} />
      )}
    </>
  );
};

import { useEffect, useState } from "react";
import "./Item.css";

export const Item = ({ addItem, el, selectedItems }) => {
  const [isSelect, setIsSelect] = useState(false);

  let className = isSelect
    ? "selectItem__option isSelect "
    : "selectItem__option";

  let disabled = isSelect ? true : false;

  useEffect(() => {
    if (selectedItems.includes(el)) return setIsSelect(true);
    return setIsSelect(false);
  }, [selectedItems]);

  return (
    <button
      value={el}
      key={el}
      onClick={addItem}
      className={className}
      disabled={disabled}
    >
      {el}
    </button>
  );
};

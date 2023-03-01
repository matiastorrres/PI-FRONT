import { useState } from "react";
import { Item } from "../Item/Item";
import "./SelectItem.css";

export function SelectItem({ data, title, onChildStateChange }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (e) => {
    let element = e.target.value;
    if (selectedItems.find((el) => el === element)) return;
    setSelectedItems((oldstate) => [...oldstate, element]);
    onChildStateChange((oldstate) => [...oldstate, element]);
  };
  const removeItem = (e) => {
    let element = e.target.value;
    let newArray = selectedItems.filter((el) => el !== element);
    setSelectedItems(newArray);
    onChildStateChange(newArray);
  };
  return (
    <section className="selectItem__container">
      <h3 className="selectItem__btn">select {title}</h3>
      <div className="selectItem__select">
        {data.map((el) => (
          <Item
            addItem={addItem}
            el={el}
            key={el}
            selectedItems={selectedItems}
          />
        ))}
      </div>
      <div className="selectedItems__container">
        {selectedItems &&
          selectedItems.map((el) => (
            <span key={el} className="selectedItems__item">
              {el}
              <button
                className="selectedItems__btn"
                onClick={removeItem}
                value={el}
              >
                x
              </button>
            </span>
          ))}
      </div>
    </section>
  );
}

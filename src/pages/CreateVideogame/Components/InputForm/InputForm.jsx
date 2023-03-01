import { useState } from "react";
import "./InputForm.css";

export function InputForm({
  title,
  type,
  placeholder,
  name,
  validations,
  setHasErrors,
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const validateInput = (e) => {
    validations(e.target.value)
      ? setError(validations(e.target.value)) &
        setHasErrors((odlState) => ({
          ...odlState,
          [e.target.name]: true,
        }))
      : setError("") &
        setHasErrors((odlState) => ({
          ...odlState,
          [e.target.name]: false,
        }));
  };

  return (
    <article className="inputForm__container">
      <label className="inputForm__label">{title}: </label>
      <input
        type={type}
        className="inputForm__input"
        placeholder={placeholder}
        name={name}
        value={input}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {error && <label className="inputForm__error">{error}</label>}
    </article>
  );
}

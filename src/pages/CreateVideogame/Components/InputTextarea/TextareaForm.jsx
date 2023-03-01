import "./TextareaForm.css";
import { useState } from "react";
export const TextareaForm = ({ title, placeholder, name, validations }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const validateInput = (e) => {
    validations(e.target.value)
      ? setError(validations(e.target.value))
      : setError("");
  };
  return (
    <article className="textareaForm__container">
      <label className="textareaForm__label">{title}: </label>
      <textarea
        name={name}
        className="textareaForm__texarea"
        placeholder={placeholder}
        rows="4"
        value={input}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {error && <label className="inputForm__error">{error}</label>}
    </article>
  );
};

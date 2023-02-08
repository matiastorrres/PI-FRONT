import "./InputForm.css";
export function InputForm({ title, type, placeholder }) {
  return (
    <article className="inputForm__container">
      <label className="inputForm__label">{title}: </label>
      <input
        type={type}
        name="name"
        className="inputForm__input"
        placeholder={placeholder}
      />
    </article>
  );
}

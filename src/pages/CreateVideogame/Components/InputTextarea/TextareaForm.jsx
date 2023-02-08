import "./TextareaForm.css";
export const TextareaForm = ({ title, placeholder }) => {
  return (
    <article className="textareaForm__container">
      <label className="textareaForm__label">{title}: </label>
      <textarea
        name="name"
        className="textareaForm__texarea"
        placeholder={placeholder}
        rows="4"
      />
    </article>
  );
};

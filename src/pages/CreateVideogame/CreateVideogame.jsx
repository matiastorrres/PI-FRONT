import "./CreateVideogame.css";
import { InputForm } from "./Components/InputForm/InputForm";
import { TextareaForm } from "./Components/InputTextarea/TextareaForm";
export const CreateVideogame = () => {
  return (
    <section className="createVideogame__container">
      <div className="createVideogame__wrapper">
        <h2 className="createVideogame__title">Form to create a video game</h2>
        <InputForm
          title={"Videogame name"}
          type={"text"}
          placeholder={"Enter the name of the game"}
        />
        <TextareaForm
          title={"Description"}
          placeholder={"Enter a description for your video game"}
        />
        <InputForm
          title={"Relase date"}
          type={"date"}
          placeholder={"Enter the game release date"}
        />
        <InputForm
          title={"Rating"}
          type={"number"}
          placeholder={"Enter a score for the video game"}
        />
        <InputForm
          title={"Image URL"}
          type={"url"}
          placeholder={"Enter the url of the cover image"}
        />
      </div>
    </section>
  );
};

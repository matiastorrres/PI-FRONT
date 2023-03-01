import "./CreateVideogame.css";
import { useState } from "react";
import { InputForm } from "./Components/InputForm/InputForm";
import { TextareaForm } from "./Components/InputTextarea/TextareaForm";
import { SelectItem } from "../../components/SelectItem/SelectItem";
import { useGetGenres } from "../../hook/useGetGenres";
import { useGetallPlantform } from "../../hook/useGetallPlantform";
import { videogameName } from "../../utilities/videogameName";
import { validateDescription } from "../../utilities/validateDescription";
import { validateReleased } from "../../utilities/validateReleased";
import { validateRating } from "../../utilities/validateRating";
import { validateImagen } from "../../utilities/validateImagen";

export const CreateVideogame = () => {
  const [itemGenres, setItemGenres] = useState([]);
  const [itemPlantforms, setItemPlantforms] = useState([]);
  const [hasErrors, setHasErrors] = useState({});

  const handleChildPlatformsChange = (value) => {
    setItemPlantforms(value);
  };
  const handleChildGenreChange = (value) => {
    setItemGenres(value);
  };

  /*traigo elementos para renderizar*/
  const { genres } = useGetGenres();
  const { platforms } = useGetallPlantform();

  /* aca hacemos el post*/
  const handlepost = (e) => {
    e.preventDefault();
    let post = Object.fromEntries(new FormData(e.target));
    post = { ...post, genres: itemGenres, platforms: itemPlantforms };
    console.log(post);
  };
  return (
    <section className="createVideogame__container">
      <div className="createVideogame__wrapper">
        <form onSubmit={handlepost}>
          <h2 className="createVideogame__title">
            Form to create a video game
          </h2>
          <InputForm
            title={"Videogame name"}
            type={"text"}
            placeholder={"Enter the name of the game"}
            name={"name"}
            validations={(e) => videogameName(e)}
            setHasErrors={setHasErrors}
          />
          <TextareaForm
            title={"Description"}
            placeholder={"Enter a description for your video game"}
            name={"description"}
            validations={(e) => validateDescription(e)}
            setHasErrors={setHasErrors}
          />
          <InputForm
            title={"Relase date"}
            type={"date"}
            placeholder={"Enter the game release date"}
            name={"released"}
            validations={(e) => validateReleased(e)}
            setHasErrors={setHasErrors}
          />
          <InputForm
            title={"Rating"}
            type={"number"}
            placeholder={"Enter a score for the video game"}
            name={"rating"}
            validations={(e) => validateRating(e)}
            setHasErrors={setHasErrors}
          />
          <InputForm
            title={"Image URL"}
            type={"url"}
            placeholder={"Example: https://www.example.com/image.png"}
            name={"background_image"}
            validations={(e) => validateImagen(e)}
            setHasErrors={setHasErrors}
          />
          <SelectItem
            data={genres}
            title={"genres"}
            onChildStateChange={handleChildGenreChange}
          />
          <SelectItem
            data={platforms}
            title={"platforms"}
            onChildStateChange={handleChildPlatformsChange}
          />
          <input
            type="submit"
            className="createVideogame__submit"
            value={"save"}
          />
        </form>
      </div>
    </section>
  );
};

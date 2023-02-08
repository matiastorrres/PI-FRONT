import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import "./DetailVideogame.css";
export const DetailVideogame = () => {
  const [detail, setdetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [wordDescription, setWordDescription] = useState({
    all: "",
    short: "",
  });
  const [description, setDescription] = useState("");
  const [textBtn, setTextBtn] = useState("Read More");

  const { id } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true);
    fetch(`http://localhost:3001/videogame/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdetail(data);
        setWordDescription({
          all: data.description,
          short: `${data.description.split(" ").slice(0, 100).join(" ")} .....`,
        });
        setDescription(
          `${data.description.split(" ").slice(0, 100).join(" ")} .....`
        );

        setLoading(false);
      })
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, []);

  const readMore = () => {
    if (description === wordDescription.short) {
      setDescription(wordDescription.all);
      setTextBtn("Show less");
    }
    if (description === wordDescription.all) {
      setDescription(wordDescription.short);
      setTextBtn("Read more");
    }
  };

  if (loading) return <Loader />;

  return (
    <section className="detailVideogame__container">
      <img
        src={detail.background_image}
        alt="img-game"
        className="detailVideogame__wallpaper"
      />
      <div className="detailVideogame__main">
        <div className="detailVideogame__section">
          <time className="detailVideogame__date">{detail.released}</time>
          {/* cambiar por iconos */}
          <p className="detailVideogame__platformsIcon">{detail.platforms}</p>
          <h2 className="detailVideogame__title">{detail.name}</h2>
          <img
            src={detail.background_image}
            alt="img-game"
            className="detailVideogame__img"
          />
          <button className="detailVideogame__btn">add to Favorites</button>
        </div>
        <div className="detailVideogame__section">
          <div className="detailVideogame__containerItem">
            <article className="detailVideogame__item">
              <h3>Rating: </h3>
              <p>{detail.rating}</p>
            </article>
            <article className="detailVideogame__item">
              <h3>Genres: </h3>
              <div>
                {detail.genres &&
                  detail.genres.map((e) => <li key={e}> {e} </li>)}
              </div>
            </article>
          </div>
          <article className="detailVideogame__description">
            <h3 className="about__title">About</h3>
            <p>
              {description.replace(/<[^>]+>/g, "")}{" "}
              <button onClick={readMore}>{textBtn}</button>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

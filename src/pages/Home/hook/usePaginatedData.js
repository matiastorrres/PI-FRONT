import { useState, useContext, useEffect } from "react";
import { VideogamesContext } from "../context/videogames";

export const usePaginatedData = () => {
  /*se calcula la cantidad de paginas y los elementos que se rederizan por pagina segun
  los elementos que llegan de la api
  */
  const { videogames, setCurrentVideogames, order } =
    useContext(VideogamesContext);
  const [page, setPage] = useState(1);

  let amountOfDataPerPage = 5;

  console.log(page);
  useEffect(() => {
    let indexOfLastCard = page * amountOfDataPerPage;
    let indexOfFirstCard = indexOfLastCard - amountOfDataPerPage;
    let newcurrentVideogames = videogames.slice(
      indexOfFirstCard,
      indexOfLastCard
    );
    setCurrentVideogames(newcurrentVideogames);
  }, [page, videogames, order]);

  return { page, setPage, amountOfDataPerPage };
};

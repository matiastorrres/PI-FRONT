import { useState } from "react";

export const usePaginatedData = ({ allVideogames }) => {
  /*se calcula la cantidad de paginas y los elementos que se rederizan por pagina segun
  los elementos que llegan de la api
  */
  const [page, setPage] = useState(1);
  const amountOfDataPerPage = 5;
  let indexOfLastCard = page * amountOfDataPerPage;
  let indexOfFirstCard = indexOfLastCard - amountOfDataPerPage;
  let currentVideogames = allVideogames.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  return { page, setPage, currentVideogames, amountOfDataPerPage };
};

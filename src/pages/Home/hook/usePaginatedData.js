import { useState } from "react";

export const usePaginatedData = ({ allVideogames }) => {
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

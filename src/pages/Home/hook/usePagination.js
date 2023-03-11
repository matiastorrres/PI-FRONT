import { useState, useEffect } from "react";

/*aca esta toda la logica para rederizar el paginado y las funciones que se usan 
para cambiar de pagina
*/

export const usePagination = ({
  videogames,
  amountOfDataPerPage,
  setPage,
  page,
}) => {
  const [numberPage, setNumberPage] = useState([]);
  const [calculationNumberPage, setCalculationNumberPage] = useState([]);

  useEffect(() => {
    const res = Math.ceil(videogames.length / amountOfDataPerPage);
    setCalculationNumberPage(res);
    let countButtons = [];
    for (let i = 1; i <= res; i++) {
      countButtons.push(i);
    }
    setNumberPage(countButtons);
  }, [videogames]);

  const goToNextPage = () => {
    if (page < calculationNumberPage) setPage(page + 1);
  };
  const goToPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleClick = (e) => {
    setPage(parseInt(e.target.value));
  };
  return { numberPage, goToNextPage, goToPreviousPage, handleClick };
};

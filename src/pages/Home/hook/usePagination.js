import { useState, useEffect } from "react";

export const usePagination = ({ dataArray, amountOfDataPerPage, setPage }) => {
  const [numberPage, setNumberPage] = useState([]);
  const [calculationNumberPage, setCalculationNumberPage] = useState([]);

  useEffect(() => {
    const res = Math.ceil(dataArray.length / amountOfDataPerPage);
    setCalculationNumberPage(res);
    let countButtons = [];
    for (let i = 1; i <= calculationNumberPage; i++) {
      countButtons.push(i);
    }
    setNumberPage(countButtons);
  }, [calculationNumberPage]);

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

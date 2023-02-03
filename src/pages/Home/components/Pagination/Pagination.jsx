import "./Pagination.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Pagination = ({
  dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  amountOfDataPerPage = 3,
}) => {
  console.log(dataArray.length, amountOfDataPerPage, 20 / 5);
  const [page, setPage] = useState([]);
  const [calculationNumberPage, setCalculationNumberPage] = useState([]);

  useEffect(() => {
    const res = Math.ceil(dataArray.length / amountOfDataPerPage);
    setCalculationNumberPage(res);
    let countButtons = [];
    for (let i = 1; i <= calculationNumberPage; i++) {
      countButtons.push(i);
    }
    setPage(countButtons);
  }, [dataArray, amountOfDataPerPage]);

  const goToNextPage = () => {
    if (page < calculationNumberPage) setPage(page + 1);
  };
  const goToPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className="pagination__container">
      <div className="pagination__wrapper">
        <button onClick={goToPreviousPage}>&lt;&lt;</button>
        {page.map((el) => (
          <button key={el}>{el}</button>
        ))}
        <button onClick={goToNextPage}>&gt;&gt;</button>
      </div>
    </section>
  );
};
Pagination.propTypes = {
  dataArray: PropTypes.array,
  amountOfDataPerPage: PropTypes.number,
};

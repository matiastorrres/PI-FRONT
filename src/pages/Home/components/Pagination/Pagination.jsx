import "./Pagination.css";
import PropTypes from "prop-types";
import { usePagination } from "../../hook/usePagination";

export const Pagination = ({
  dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  amountOfDataPerPage = 3,
  setPage,
  page,
}) => {
  const { numberPage, goToNextPage, goToPreviousPage, handleClick } =
    usePagination({ dataArray, amountOfDataPerPage, setPage, page });

  return (
    <section className="pagination__container">
      <div className="pagination__wrapper">
        <button onClick={goToPreviousPage}>&lt;&lt;</button>
        {numberPage &&
          numberPage.map((el) => (
            <button
              key={el}
              value={el}
              onClick={handleClick}
              className={page === el ? "active" : ""}
            >
              {el}
            </button>
          ))}
        <button onClick={goToNextPage}>&gt;&gt;</button>
      </div>
    </section>
  );
};

Pagination.propTypes = {
  dataArray: PropTypes.array,
  amountOfDataPerPage: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number,
};

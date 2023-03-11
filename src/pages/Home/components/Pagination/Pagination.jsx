import "./Pagination.css";
import { usePagination } from "../../hook/usePagination";
import { usePaginatedData } from "../../hook/usePaginatedData";
import { useContext } from "react";
import { VideogamesContext } from "../../context/videogames";

export const Pagination = () => {
  const { videogames } = useContext(VideogamesContext);

  const { page, setPage, amountOfDataPerPage } = usePaginatedData({
    videogames,
  });

  const { numberPage, goToNextPage, goToPreviousPage, handleClick } =
    usePagination({ videogames, amountOfDataPerPage, setPage, page });

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

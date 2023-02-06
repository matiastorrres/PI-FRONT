import { Header } from "./components/Header/Header";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { useGetallVideoGames } from "./hook/useGetallVideoGames";
import { usePaginatedData } from "./hook/usePaginatedData";
import { SideBarMovile } from "./components/SideBarMobile/SideBarMobile";
import { SideBarDesk } from "./components/SideBarDesk/SideBarDesk";
import { Loader } from "../../components/Loader/Loader";
import "./Home.css";

export const Home = () => {
  /*busco todos lo videogames */
  const { allVideogames, loading, setAllVidegames } = useGetallVideoGames();
  /* calculo el paginado*/
  const { page, setPage, currentVideogames, amountOfDataPerPage } =
    usePaginatedData({ allVideogames });

  if (loading) return <Loader />;

  return (
    <>
      <Header setAllVidegames={setAllVidegames} />
      <div className="pageHome__container">
        <main className="pageHome__main">
          <SideBarMovile />
          <SideBarDesk />
          <CardsContainer currentVideogames={currentVideogames} />
        </main>
        <Pagination
          dataArray={allVideogames}
          amountOfDataPerPage={amountOfDataPerPage}
          setPage={setPage}
          page={page}
        />
      </div>
    </>
  );
};

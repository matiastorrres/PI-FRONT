import { Header } from "@/components/Header/Header";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { useGetallVideoGames } from "./hook/useGetallVideoGames";
import { usePaginatedData } from "./hook/usePaginatedData";
import "./Home.css";

export const Home = () => {
  const { allVideogames, loading } = useGetallVideoGames();

  const { page, setPage, currentVideogames, amountOfDataPerPage } =
    usePaginatedData({
      allVideogames,
    });

  if (loading) return <>cargandooo...</>;

  return (
    <section>
      <Header />
      <div className="pageHome__container">
        <main className="pageHome__main">
          <CardsContainer currentVideogames={currentVideogames} />
        </main>
        <Pagination
          dataArray={allVideogames}
          amountOfDataPerPage={amountOfDataPerPage}
          setPage={setPage}
          page={page}
        />
      </div>
    </section>
  );
};

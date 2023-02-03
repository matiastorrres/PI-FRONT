import { Header } from "@/components/Header/Header";
import { useContext } from "react";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Pagination } from "./components/Pagination/Pagination";

import { HomeContext } from "./context/HomeContext";
import "./Home.css";

export const Home = () => {
  const { allVideogames, amountOfDataPerPage, loading } =
    useContext(HomeContext);

  if (loading) return <>cargandooo...</>;
  return (
    <section className="pageHome__container">
      <Header />
      <main className="pageHome__main">
        <CardsContainer />
      </main>
      <Pagination
        dataArray={allVideogames}
        amountOfDataPerPage={amountOfDataPerPage}
      />
    </section>
  );
};

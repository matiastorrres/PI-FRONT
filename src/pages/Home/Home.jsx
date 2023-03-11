import { Header } from "./components/Header/Header";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { SideBarMovile } from "./components/SideBarMobile/SideBarMobile";
import { SideBarDesk } from "./components/SideBarDesk/SideBarDesk";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="pageHome__container">
        <main className="pageHome__main">
          <SideBarMovile />
          <SideBarDesk />
          <CardsContainer />
        </main>
        <Pagination />
      </div>
    </>
  );
};

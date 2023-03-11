import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Home } from "./pages/Home/Home";
import { CreateVideogame } from "./pages/CreateVideogame/CreateVideogame";
import { DetailVideogame } from "./pages/DetailVideogame/DetailVideogame";

/*TODO:hacer importaciones dinamicas*/
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newgame" element={<CreateVideogame />} />
      <Route path="/detail/:id" element={<DetailVideogame />} />
    </Routes>
  );
};

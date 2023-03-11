import { createContext, useEffect, useState } from "react";
import { useGetallVideoGames } from "../hook/useGetallVideoGames";

export const VideogamesContext = createContext();

export const VideogamesProvider = ({ children }) => {
  const { allVideogames } = useGetallVideoGames();
  const [videogames, setvideogames] = useState([]);
  const [auxiliar, setauxiliar] = useState([]);
  const [currentVideogames, setCurrentVideogames] = useState([]);
  const [order, setOrder] = useState("relevance");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setvideogames(allVideogames);
    setauxiliar(allVideogames);
  }, [allVideogames]);

  const ordervideogames = (order) => {
    if (order === "relevance") {
      setOrder(order);
      return setvideogames(auxiliar);
    }

    if (order === "a-z") {
      console.log(auxiliar);
      let aux = [...auxiliar];
      let newVideogames = aux.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
        return 0;
      });
      setOrder(order);
      return setvideogames(newVideogames);
    }
    if (order === "z-a") {
      let aux = [...auxiliar];
      let newVideogames = aux.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        return 0;
      });
      setOrder(order);
      return setvideogames(newVideogames);
    }
    if (order === "higher rating") {
      let aux = [...auxiliar];
      let newVideogames = aux.sort((a, b) => {
        if (a.rating < b.rating) return 1;
        if (b.rating < a.rating) return -1;
        return 0;
      });
      setOrder(order);
      return setvideogames(newVideogames);
    }
    if (order === "lower rating") {
      let aux = [...auxiliar];
      let newVideogames = aux.sort((a, b) => {
        if (a.rating > b.rating) return 1;
        if (b.rating > a.rating) return -1;
        return 0;
      });
      setOrder(order);
      return setvideogames(newVideogames);
    }
  };

  const filterVideogames = (filter) => {
    if (filter === "all") {
      setFilter(filter);
      return setvideogames(auxiliar);
    }
    let aux = [...auxiliar];
    const newVideogames = aux.filter((el) => el.genres.includes(filter));
    setFilter(filter);
    return setvideogames(newVideogames);
  };

  return (
    <VideogamesContext.Provider
      value={{
        videogames,
        setvideogames,
        currentVideogames,
        setCurrentVideogames,
        ordervideogames,
        filterVideogames,
        setOrder,
        setFilter,
        order,
        filter,
        setauxiliar,
      }}
    >
      {children}
    </VideogamesContext.Provider>
  );
};

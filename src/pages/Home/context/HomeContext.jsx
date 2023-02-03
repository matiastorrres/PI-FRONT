import { faL } from "@fortawesome/free-solid-svg-icons";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [allVideogames, setAllVidegames] = useState([]);
  const [loading, setLoading] = useState(false);

  const amountOfDataPerPage = 5;
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/videogame")
      .then((res) => res.json())
      .then((data) => {
        setAllVidegames(data);
        setLoading(false);
      });
  }, []);

  const data = {
    allVideogames,
    loading,
    amountOfDataPerPage,
  };
  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};

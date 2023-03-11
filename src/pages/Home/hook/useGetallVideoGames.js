import { useEffect, useState } from "react";
import { fetchingData } from "../../../services/getAllVideogames";

export const useGetallVideoGames = () => {
  const [allVideogames, setAllVidegames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const url = "http://localhost:3001/videogame";
    setLoading(true);
    fetchingData({ url, signal })
      .then((data) => {
        setAllVidegames(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  return {
    allVideogames,
    setAllVidegames,
    loading,
  };
};

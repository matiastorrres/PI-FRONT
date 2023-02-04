import { useEffect, useState } from "react";

export const useGetallVideoGames = () => {
  const [allVideogames, setAllVidegames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true);
    fetch("http://localhost:3001/videogame", { signal })
      .then((res) => res.json())
      .then((data) => {
        setAllVidegames(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, []);

  return {
    allVideogames,
    loading,
  };
};

export const useFetchAndLoad = () => {};

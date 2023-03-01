import { useEffect, useState } from "react";
import { getAllGenres } from "../services/getAllGenres";
export const useGetGenres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getAllGenres().then((resp) => setGenres(resp));
  }, []);
  return { genres };
};

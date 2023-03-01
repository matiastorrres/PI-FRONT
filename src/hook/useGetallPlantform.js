import { useEffect, useState } from "react";
import { getAllPlatfroms } from "../services/getAllPlatforms";
export const useGetallPlantform = () => {
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    getAllPlatfroms().then((resp) => setPlatforms(resp));
  }, []);
  return { platforms };
};

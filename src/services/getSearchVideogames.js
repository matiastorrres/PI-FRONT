export const getSearchVideogames = () => {
  return fetch("http://localhost:3001/videogame/platform")
    .then((res) => res.json())
    .then((data) => data);
};

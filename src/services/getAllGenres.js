export const getAllGenres = () => {
  return fetch("http://localhost:3001/genre")
    .then((res) => res.json())
    .then((data) => data);
};

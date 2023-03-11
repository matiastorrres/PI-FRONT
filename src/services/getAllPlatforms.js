export const getAllPlatfroms = ({ name }) => {
  return fetch(`http://localhost:3001/videogame?name=${name}`)
    .then((res) => res.json())
    .then((data) => data);
};

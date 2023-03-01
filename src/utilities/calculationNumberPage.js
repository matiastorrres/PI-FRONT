const calculationNumberPage = ({ dataArray, amountOfDataPerPage }) => {
  return Math.ceil(dataArray.length / amountOfDataPerPage);
};

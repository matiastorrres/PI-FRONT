export const validateRating = (value) => {
  const validar = /^\d*(\.\d{1})?\d{0,1}$/;
  console.log(value.length);
  if (value > 5 || value < 0 || !validar.test(value) || value.length > 4)
    return "It must be greater than 0 and less than 5, it can contain two decimals separated by a point from the integer part";
};

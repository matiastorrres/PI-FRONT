export const validateReleased = (value) => {
  const validate = /^\d{4}([-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
  let year = parseInt(String(value).substring(0, 4));
  let month = parseInt(String(value).substring(5, 7));
  let day = parseInt(String(value).substring(8, 10));
  let dateEntered = new Date(year, month, day + 1);
  let maxDate = new Date();
  let minDate = new Date(1952, 1, 1);
  if (dateEntered > maxDate || dateEntered < minDate || !validate.test(value))
    return "The date to enter must be less than the current and greater than the year 1952";
};

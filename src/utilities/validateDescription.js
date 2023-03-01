export const validateDescription = (string) => {
  if (!string) return "This field is required";
  const validar = /^[a-zA-Z0-9-()-: .]+$/;
  if (!validar.test(string))
    return `Only lowercase and uppercase letters, numbers, "-", ": ","." and "/"`;
  if (string.length <= 30 || string.length > 255 || string.trim().length <= 0) {
    return "Must be between 60 and 255 characters";
  }
};

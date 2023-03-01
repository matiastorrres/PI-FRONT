export const validateImagen = (value) => {
  const img = /(https?:\/\/.*\.(?:png|jpg))/;
  if (value && !img.test(value)) return "Enter an image URL (.png or .jpg)";
};

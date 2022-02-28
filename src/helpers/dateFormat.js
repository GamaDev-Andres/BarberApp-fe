export const dateFormat = (date) => {
  const fecha = date ? new Date(date) : new Date();
  const fechaFormat = new Intl.DateTimeFormat("fr-CA").format(fecha);
  return fechaFormat;
};

export const dateFormat = (date) => {
  const fecha = date ? new Date(date) : new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const day = fecha.getDate();
  return `${year}-${+month + 1}-${day}`;
};

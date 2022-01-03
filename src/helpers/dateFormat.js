export const dateFormat = (date) => {
  const fecha = date ? new Date(date) : new Date();
  const year = fecha.getFullYear();
  const month =
    +fecha.getMonth() < 10 ? `0${fecha.getMonth()}` : fecha.getMonth();
  const day = +fecha.getDate() < 10 ? `0${fecha.getDate()}` : fecha.getDate();
  return `${year}-${+month + 1 === 1 ? "01" : +month + 1}-${day}`;
};

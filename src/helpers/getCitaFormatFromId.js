import { dateFormat } from "./dateFormat";

const getCitaFormatFromId = (id, citas) => {
  if (!id || !citas) return {};
  const cita = citas.find((date) => date._id === id);
  const { barbero, observaciones, fecha } = cita;
  const arrFecha = new Date(fecha).toLocaleString().split(" ");
  const fechaMod = dateFormat(fecha);
  const firstLetterHour = arrFecha[0].split(":")[0];
  const horaMod =
    +firstLetterHour < 10
      ? `0${arrFecha[1]}`.substring(0, 5)
      : `${arrFecha[1]}`.substring(0, 5);

  return {
    barbero: barbero._id,
    fecha: fechaMod,
    hora: horaMod,
    observaciones,
  };
};
export default getCitaFormatFromId;

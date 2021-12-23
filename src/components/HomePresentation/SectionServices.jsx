import React from "react";
import CardService from "./CardService";
import { ContainerCards, TitleSection } from "./styles";
import imgCitas from "../../../assets/citas.png";
import imgEditar from "../../../assets/editar.png";
import imgCalifica from "../../../assets/califica.jpg";
const arrServices = [
  {
    title: "Citas 100% personalizadas",
    foto: imgCitas,
    description: `En BarberApp podrás escoger a tu barbero favorito en el horario que él tenga disponible
       y él podrá rechazar o aceptar tu solicitud, basandose en su agenda del día `,
  },
  {
    title: "Edita o elimina tus citas!",
    foto: imgEditar,
    description: `Te equivocaste? o quieres cambiar de barbero ?, con esta funcion podras
    corregir cualquier cosa en tu cita y si ya no puedes o quieres asistir podras eliminarla.`,
  },
  {
    title: "Elige a tu favorito",
    foto: imgCalifica,
    description: `NO sabes a que barbero elegir? podras ver la lista de los barberos disponibles y ver sus
    perfiles, en cada perfil encontraras los comentarios de los clientes que han agendado citas con 
    ese barbero y tambien los detalles del mismo.`,
  },
];
const SectionServices = () => {
  return (
    <section>
      <TitleSection>Nuestros servicios</TitleSection>
      <ContainerCards>
        {arrServices.map((service) => (
          <CardService key={service.title} service={service} />
        ))}
      </ContainerCards>
    </section>
  );
};

export default SectionServices;

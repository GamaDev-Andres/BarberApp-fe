import React from "react";

import { arrServices } from "../../helpers/arrServicios";
import CardService from "./CardService";
import { ContainerCards, TitleSection } from "./styles";

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

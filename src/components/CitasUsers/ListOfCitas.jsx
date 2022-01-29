import React, { useContext, useEffect, useState } from "react";

import contextCitas from "../../contexts/contextCitas/contextCitas";
import Spinner from "../Spinner/Spinner";
import Cita from "./Cita";
import { ContainerCitas } from "./styles";

const ListOfCitas = () => {
  const [loadingCitas, setLoadingCitas] = useState(false);
  const { getCitas, citas } = useContext(contextCitas);

  useEffect(() => {
    const cargandoCitas = async () => {
      setLoadingCitas(true);
      if (!citas) {
        await getCitas();
      }
      setLoadingCitas(false);
    };

    cargandoCitas();
  }, []);

  return loadingCitas ? (
    <Spinner />
  ) : (
    <>
      <h2>Mis citas</h2>
      <ContainerCitas>
        {citas?.length ? (
          citas?.map((cita) => <Cita key={cita._id} cita={cita} />)
        ) : (
          <p>Aún no tienes citas.</p>
        )}
      </ContainerCitas>
    </>
  );
};

export default ListOfCitas;

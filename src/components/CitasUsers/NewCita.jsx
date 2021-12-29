import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import contextCitas from "../../contexts/contextCitas/contextCitas";
import { dateFormat } from "../../helpers/dateFormat";
import getCitaFormatFromId from "../../helpers/getCitaFormatFromId";
import Spinner from "../Spinner/Spinner";
import FormCita from "./FormCita";
import { ContainerNewCitaUsers } from "./styles";

const NewCita = () => {
  const { id } = useParams();
  const { citas, getCitas } = useContext(contextCitas);
  const [objCita, setObjCita] = useState(getCitaFormatFromId(id, citas) || {});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!citas) {
      setLoading(true);
      getCitas()
        .then((res) => {
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (!id) return;
    const obj = getCitaFormatFromId(id, citas);
    setObjCita(obj);
  }, [id, citas]);

  return (
    <ContainerNewCitaUsers>
      {loading ? <Spinner /> : <FormCita defaultValues={objCita} />}
    </ContainerNewCitaUsers>
  );
};

export default NewCita;

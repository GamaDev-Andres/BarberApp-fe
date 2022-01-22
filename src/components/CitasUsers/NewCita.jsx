import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import contextCitas from "../../contexts/contextCitas/contextCitas";
import getCitaFormatFromId from "../../helpers/getCitaFormatFromId";
import Spinner from "../Spinner/Spinner";
import FormCita from "./FormCita";
import { ContainerNewCitaUsers } from "./styles";

const NewCita = () => {
  const { id } = useParams();
  const { citas, getCitas } = useContext(contextCitas);
  const [objCita, setObjCita] = useState(getCitaFormatFromId(id, citas) || {});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    if (!citas) {
      setLoading(true);
      getCitas()
        .then((res) => {
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const obj = getCitaFormatFromId(id, citas);
    if (!obj) {
      Swal.fire("error", "Id de cita no valido", "error").then((res) => {
        navigate("/citas");
      });
    } else {
      setObjCita(obj);
    }
  }, [id, citas]);

  return (
    <ContainerNewCitaUsers>
      {loading ? <Spinner /> : <FormCita defaultValues={objCita} />}
    </ContainerNewCitaUsers>
  );
};

export default NewCita;

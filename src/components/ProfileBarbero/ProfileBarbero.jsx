import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import contextUsers from "../../contexts/contextUsers/contextUsers";
import Spinner from "../Spinner/Spinner";
import CalificacionesBarbero from "./CalificacionesBarbero";
import CortesHechos from "./CortesHechos";
import DetailsProfile from "./DetailsProfile";
import { StyledContainerProfileBarbero } from "./styles";

const ProfileBarbero = () => {
  const [loading, setLoading] = useState(false);
  const { getBarberos, barberos } = useContext(contextUsers);
  const {
    user,
    user: { id: userId, type },
  } = useContext(contextAuth);
  const [currentBarbero, setCurrentBarbero] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBarberosEffect = async () => {
      if (!barberos) {
        setLoading(true);
        try {
          await getBarberos();
        } catch (error) {
          console.log(error);
          navigate("/");
        }
        setLoading(false);
      }
    };

    if (type === "user") {
      getBarberosEffect();
    }

    return () => setLoading(false);
  }, []);

  useEffect(() => {
    if (type === "empleado") {
      if (id !== userId) {
        Swal.fire(
          "error",
          "Este perfil no esta dispoible para empleados",
          "error"
        ).then((res) => navigate("/"));
        return;
      }
      setCurrentBarbero({
        _id: userId,
        nombre: user.nombre,
        cortes: user.cortes,
        calificacion: user.calificacion,
        perfil: user?.perfil,
      });
      return;
    }
    if (!barberos) return;
    const barbero = barberos.find((el) => el._id === id);
    if (barbero) {
      setCurrentBarbero(barbero);
    } else {
      Swal.fire(
        "error",
        "Este barbero no existe o no existen barberos disponibles",
        "error"
      ).then((res) => {
        navigate("/");
      });
    }
  }, [id, barberos, user]);

  if (loading || !currentBarbero) return <Spinner />;
  return (
    <StyledContainerProfileBarbero>
      <DetailsProfile currentBarbero={currentBarbero} />
      <CalificacionesBarbero currentBarbero={currentBarbero} />
      <CortesHechos currentBarbero={currentBarbero} />
    </StyledContainerProfileBarbero>
  );
};

export default ProfileBarbero;

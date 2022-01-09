import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import contextUsers from "../../contexts/contextUsers/contextUsers";
import Spinner from "../Spinner/Spinner";
import CalificacionesBarbero from "./CalificacionesBarbero";
import ComentariosSobreBarbero from "./ComentariosSobreBarbero";
import CortesHechos from "./CortesHechos";
import DetailsProfile from "./DetailsProfile";
import { StyledContainerProfileBarbero } from "./styles";

const ProfileBarbero = () => {
  const [loading, setLoading] = useState(false);
  const { getBarberos, barberos } = useContext(contextUsers);
  const [currentBarbero, setCurrentBarbero] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getBarberosEffect = async () => {
      if (!barberos) {
        setLoading(true);
        await getBarberos();
        setLoading(false);
      }
    };
    getBarberosEffect();
    return () => setLoading(false);
  }, []);

  useEffect(() => {
    if (!barberos) return;
    const barbero = barberos.find((el) => el._id === id);
    if (!barbero) {
      Swal.fire(
        "error",
        "Este barbero no existe o no existen barberos disponibles",
        "error"
      ).then((res) => {
        navigate("/");
      });
    } else {
      setCurrentBarbero(barbero);
    }
  }, [id, barberos]);

  if (loading || !currentBarbero) return <Spinner />;
  return (
    <StyledContainerProfileBarbero>
      <CalificacionesBarbero currentBarbero={currentBarbero} />
      <DetailsProfile currentBarbero={currentBarbero} />
      <CortesHechos currentBarbero={currentBarbero} />
      <ComentariosSobreBarbero currentBarbero={currentBarbero} />
    </StyledContainerProfileBarbero>
  );
};

export default ProfileBarbero;

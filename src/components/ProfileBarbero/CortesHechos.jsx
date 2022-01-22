import React, { useContext, useEffect, useState } from "react";

import Corte from "./Corte";
import { StyledContainerCortes } from "./styles";
import Carousel from "react-bootstrap/Carousel";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import contextAuth from "../../contexts/contextAuth/ContextAuth";
import useUpdateCloudinary from "../../hook/useUpdateCloudinary";

const CortesHechos = ({ currentBarbero }) => {
  const [open, setOpen] = useState(false);
  const {
    user: { id },
    editarUser,
  } = useContext(contextAuth);
  const {
    data,
    loading,
    handleOpen: handleOpenWidget,
  } = useUpdateCloudinary(true);

  useEffect(() => {
    if (data) {
      const cortesObj = { cortes: [...data] };
      editarUser(cortesObj)
        .then((res) => console.log("cortes subidos"))
        .catch((error) => console.log(error));
    }
  }, [data]);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClickAddFotos = () => {
    handleOpenWidget();
  };

  return (
    <StyledContainerCortes>
      <h2>Cortes</h2>
      {id === currentBarbero._id && (
        <ActionsMenu handleOpen={handleOpen} open={open}>
          <StyledItemAction
            as="button"
            disabled={loading}
            onClick={handleClickAddFotos}
          >
            Agregar corte
          </StyledItemAction>
        </ActionsMenu>
      )}
      {currentBarbero.cortes.length > 0 && (
        <Carousel>
          {currentBarbero.cortes.map((corte) => (
            <Carousel.Item key={corte}>
              <Corte corte={corte} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </StyledContainerCortes>
  );
};

export default CortesHechos;

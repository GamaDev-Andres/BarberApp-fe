import React, { useContext, useState } from "react";
import Corte from "./Corte";
import { StyledContainerCortes } from "./styles";
import Carousel from "react-bootstrap/Carousel";
import ActionsMenu from "../layout/ActionsMenu/ActionsMenu";
import { StyledItemAction } from "../layout/ActionsMenu/styles";
import contextAuth from "../../contexts/contextAuth/ContextAuth";

const CortesHechos = ({ currentBarbero }) => {
  const [open, setOpen] = useState(false);
  const {
    user: { id },
  } = useContext(contextAuth);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    const fileInput = e.target.files[0];
    console.log(fileInput);
    reader.readAsDataURL(fileInput);

    reader.onload = function () {
      console.log(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  };

  return (
    <StyledContainerCortes>
      <h2>Cortes</h2>
      {id === currentBarbero._id && (
        <ActionsMenu handleOpen={handleOpen} open={open}>
          <StyledItemAction as="label" htmlFor="input-file-cortes">
            Agregar corte
          </StyledItemAction>

          <input
            onChange={handleChangeFile}
            accept="image/*"
            type="file"
            id="input-file-cortes"
          />
        </ActionsMenu>
      )}
      <Carousel>
        {[1, 2, 3, 4, 5].map((corte) => (
          <Carousel.Item key={corte}>
            <Corte />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledContainerCortes>
  );
};

export default CortesHechos;

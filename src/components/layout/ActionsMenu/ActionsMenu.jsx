import React, { useRef } from "react";
import { StyledContainerActions, StyledOptionsActions } from "./styles";

const ActionsMenu = ({ children, handleOpen, open }) => {
  const menuOptions = useRef();

  const handleOpenKeyEnter = (e) => {
    if (e.keyCode === 13 && e.target === menuOptions.current) {
      handleOpen();
    }
  };

  return (
    <>
      <StyledContainerActions
        onKeyUp={handleOpenKeyEnter}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        ref={menuOptions}
      >
        <i className="fas fa-ellipsis-h"></i>
      </StyledContainerActions>

      {open && (
        <StyledOptionsActions open={open}>{children}</StyledOptionsActions>
      )}
    </>
  );
};

export default ActionsMenu;

import ReactDOM from "react-dom";
import { StyledContainerModal, StyledMidContainerModal } from "./styles";
export const ModalPortal = ({ children, isOpen, closeModal }) => {
  return ReactDOM.createPortal(
    <StyledContainerModal
      isOpen={isOpen}
      onClick={() => {
        closeModal();
      }}
    >
      <StyledMidContainerModal onClick={(e) => e.stopPropagation()}>
        <span title="cerrar" onClick={closeModal}>
          <i className="fas fa-times-circle"></i>
        </span>
        {children}
      </StyledMidContainerModal>
    </StyledContainerModal>,
    document.getElementById("root-modal")
  );
};

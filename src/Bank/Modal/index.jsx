import React from "react";
import {
  ContentContainer,
  StyledModalOverlay,
  ModalWrapper,
  ModalContent as ModalContentStyledComponent,
} from "./styled";

export const ModalContent = ModalContentStyledComponent;

export const ResponsiveContent = ({ children }) => (
  <ContentContainer>{children}</ContentContainer>
);

export const ModalOverlay = (props) => {
  const { notOverlayCloseable, visible, closeModal } = props;

  const handleOverlayClick = () => {
    if (!notOverlayCloseable) {
      closeModal();
    }
  };

  return (
    <ModalWrapper {...props} visible={visible}>
      {props.render({ ...props })}
      <StyledModalOverlay onClick={handleOverlayClick} />
    </ModalWrapper>
  );
};

import React from "react";
import { ModalOverlay, ResponsiveContent, ModalContent } from "../Modal";

const ActivityIntro = ({ visible, closeModal, text }) => {
  return (
    <ModalOverlay
      visible={visible}
      closeModal={closeModal}
      notOverlayCloseable={true}
      zIndex={110}
      render={() => (
        <ResponsiveContent>
          <ModalContent>
            <div>{text}</div>
            <button onClick={() => closeModal()}>Close</button>
          </ModalContent>
        </ResponsiveContent>
      )}
    />
  );
};

export default ActivityIntro;

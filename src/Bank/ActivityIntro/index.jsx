import React from "react";
import { ModalOverlay, ResponsiveContent, ModalContent } from "../Modal";

const ActivityIntro = ({ visible, closeModal }) => {
  return (
    <ModalOverlay
      visible={visible}
      closeModal={closeModal}
      notOverlayCloseable={true}
      zIndex={110}
      render={() => (
        <ResponsiveContent>
          <ModalContent>
            <div>
              Text here to introduce the project and tell the user that we don't
              actually save any data.
            </div>
            <button onClick={() => closeModal()}>Close</button>
          </ModalContent>
        </ResponsiveContent>
      )}
    />
  );
};

export default ActivityIntro;

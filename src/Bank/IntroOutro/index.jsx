import React from "react";
import { ModalOverlay, ResponsiveContent, ModalContent } from "../Modal";
import introOutroCopy from "../introOutroCopy";

const IntroOutro = ({
  visible,
  closeModal,
  currentActivity,
  isIntro,
  endExercise,
  copy,
}) => {
  const text =
    copy ||
    introOutroCopy?.[currentActivity]?.[isIntro ? "intro" : "outro"] ||
    "copy not available";
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
            {isIntro ? (
              <button onClick={() => closeModal()}>Close</button>
            ) : (
              <button onClick={() => endExercise()}>End Exercise</button>
            )}
          </ModalContent>
        </ResponsiveContent>
      )}
    />
  );
};

export default IntroOutro;

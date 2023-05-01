import { createContext } from "react";

export const ModalContext = createContext({
  modalState: {
    isVisible: false,
    isIntro: true,
  },
  setModalState: () => {},
});

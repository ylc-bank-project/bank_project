import { createContext } from "react";

export const IntroModalContext = createContext({
  introModalState: {
    isVisible: false,
    isIntro: true,
  },
  setIntroContext: () => {},
});

export const ActivityModalContext = createContext({
  activityModalIsVisible: false,
  setActivityContext: () => {},
});

export const PaymentMethodsContext = createContext({
  paymentMethodsIsVisible: false,
  setPaymentMethodsContext: () => {},
});

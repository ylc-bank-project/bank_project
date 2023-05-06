import React, { useContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ActivityChooser from "./ActivityChooser";
import { PageContainer, AllActivitiesButton } from "./Shared/Layout";
import { theme } from "./Global";
import { AllRoutes } from "./routes";
import {
  ActivityModalContext,
  IntroModalContext,
  PaymentMethodsContext,
} from "./context";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const { activityModalIsVisible, setActivityContext } =
    useContext(ActivityModalContext);

  if (location.pathname === "/" && !activityModalIsVisible) {
    setActivityContext(true);
  }

  return (
    <PageContainer>
      <AllRoutes />
      <AllActivitiesButton
        onClick={() => {
          if (activityModalIsVisible) {
            setActivityContext(false);
          } else {
            setActivityContext(true);
          }
        }}
      >
        {activityModalIsVisible ? "Back To Activity" : "Show All Activities"}
      </AllActivitiesButton>
      <ActivityChooser
        closeModal={() => {
          setActivityContext(false);
        }}
        visible={activityModalIsVisible}
      />
    </PageContainer>
  );
};

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif; 
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
}

h2 {
  margin: 0;
}

#layers {
  z-index: 100;
}
`;

const AppExport = () => {
  // Intro Modal Context
  const [introModalState, setIntroContext] = useState({
    isVisible: false,
    isIntro: true,
  });
  const introContextValue = { introModalState, setIntroContext };

  // Activity Modal Context
  const [activityModalIsVisible, setActivityContext] = useState(false);
  const activityContextValue = { activityModalIsVisible, setActivityContext };

  // Payment Methods Modal Context
  // const [paymentMethodsIsVisible, setPaymentMethodsIsVisible] = useState(false);
  // const paymentMethodsValue = {
  //   paymentMethodsIsVisible,
  //   setPaymentMethodsIsVisible,
  // };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ActivityModalContext.Provider value={activityContextValue}>
        <IntroModalContext.Provider value={introContextValue}>
          {/* <PaymentMethodsContext.Provider value={paymentMethodsValue}> */}
          <App />
          {/* </PaymentMethodsContext.Provider> */}
        </IntroModalContext.Provider>
      </ActivityModalContext.Provider>
    </ThemeProvider>
  );
};

export default AppExport;

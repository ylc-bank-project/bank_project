import React from "react";
import { Route, Routes } from "react-router-dom";
import { activitiesEnums } from "./enums";
import AllActivities from "./Activities";

import BankHomepage, {
  AccountRegistration,
  SignIn,
  Welcome,
} from "./BankPages/BankHomepage";

/*
So, what if I want
BankHomepag


*/

export const AllRoutes = ({ currentActivity, getActivity }) => {
  return (
    <Routes>
      <Route
        path={`/:activity/:stepIndex`}
        element={getActivity({ currentActivity })}
      >
        <Route
          path="BankHomepage"
          element={<BankHomepage currentActivity={currentActivity} />}
        >
          <Route
            path=""
            element={<Welcome currentActivity={currentActivity} />}
          />
          <Route
            path="AccountRegistration"
            element={<AccountRegistration currentActivity={currentActivity} />}
          />
          <Route
            path="SignIn"
            element={<SignIn currentActivity={currentActivity} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import { activitiesEnums } from "./enums";
import AllActivities from "./Activities";
import BankHomepage from "./BankPages/BankHomepage/BankHomepage";
import AccountRegistration from "./BankPages/BankHomepage/AccountRegistration";
import SignIn from "./BankPages/BankHomepage/SignIn";

export const AllRoutes = ({ currentActivity, getActivity }) => {
  return (
    <Routes>
      <Route
        path={`/activity/:activity/:stepIndex`}
        element={getActivity({ currentActivity })}
      >
        <Route
          path="BankHomepage"
          element={<BankHomepage currentActivity={currentActivity} />}
        >
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

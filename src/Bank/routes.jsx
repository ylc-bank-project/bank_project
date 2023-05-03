import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AllActivities from "./Activities";

import BankHomepage, {
  AccountRegistration,
  SignIn,
  Welcome,
  PhoneVerification,
  CreateEmail,
} from "./BankPages/BankHomepage";
import NotFound from "./NotFound";
import { bankPageEnums } from "./enums";

function Activity(props) {
  let { activity } = useParams();
  let Act = AllActivities[activity];
  return Act ? <Act /> : <NotFound />;
}

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={`/:activity/:stepIndex`} element={<Activity />}>
        <Route path={bankPageEnums.BANKHOMEPAGE} element={<BankHomepage />}>
          <Route path="" element={<Welcome />} />
          <Route
            path={bankPageEnums.ACCOUNTREGISTRATION}
            element={<AccountRegistration />}
          />
          <Route path={bankPageEnums.SIGNIN} element={<SignIn />} />
          <Route
            path={bankPageEnums.PHONEVERIFICATION}
            element={<PhoneVerification />}
          />
          <Route path={bankPageEnums.CREATEEMAIL} element={<CreateEmail />} />
        </Route>
      </Route>
    </Routes>
  );
};

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
import { accountPagesEnums, bankPageEnums, paymentPagesEnums } from "./enums";
import {
  AllAccounts,
  CheckingHome,
  CheckingInfo,
  CheckingTransactions,
  TransferFunds,
} from "./BankPages/Accounts/";
import BasePage from "./BankPages/BaseBankPage";
import {
  PaymentsHome,
  ListOfPayees,
  PayVerifyBill,
  AddVerifyPayee,
  VerifyPayee,
  AddBill,
  VerifyBill,
  AddPayee,
} from "./BankPages/Payments";

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
        {/* Here, ACCOUNTS just uses the base page */}
        <Route path={accountPagesEnums.ACCOUNTS} element={<BasePage />}>
          <Route path="" element={<AllAccounts />} />
          <Route
            path={accountPagesEnums.TRANSFERFUNDS}
            element={<TransferFunds />}
          />
          <Route
            path={accountPagesEnums.CHECKINGHOME}
            element={<CheckingHome />}
          >
            <Route
              path={accountPagesEnums.CHECKINGINFO}
              element={<CheckingInfo />}
            />
            <Route
              path={accountPagesEnums.CHECKINGTRANSACTIONS}
              element={<CheckingTransactions />}
            />
            <Route />
          </Route>
        </Route>
        <Route path={paymentPagesEnums.PAYMENTSHOME} element={<BasePage />}>
          <Route path={""} element={<PaymentsHome />}>
            <Route
              path={paymentPagesEnums.LISTOFPAYEES}
              element={<ListOfPayees />}
            />
            <Route path={paymentPagesEnums.ADDBILL} element={<AddBill />} />
            <Route
              path={paymentPagesEnums.VERIFYBILL}
              element={<VerifyBill />}
            />
            <Route path={paymentPagesEnums.ADDPAYEE} element={<AddPayee />} />
            <Route
              path={paymentPagesEnums.VERIFYPAYEE}
              element={<VerifyPayee />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

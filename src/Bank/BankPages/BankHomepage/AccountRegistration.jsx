import React from "react";
// import {
//   BankHeader,
//   BankingBackground,
//   BankingLogo,
// } from "../BankPageElements";
// import { MarginedContainer } from "../../Shared/Layout";
import { Outlet, useParams } from "react-router-dom";
import { activitiesEnums } from "../../enums";

const AccountRegistration = ({ currentActivity }) => {
  const { step } = useParams();

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;

  return <div>Account Registration</div>;
};

export default AccountRegistration;

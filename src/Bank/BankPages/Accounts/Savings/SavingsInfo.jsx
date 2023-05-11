import React from "react";
// import { InfoTip } from "../../../Shared/Tip";
// import styled from "styled-components";
import { ItemListing } from "../../BankPageElements";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   accountPagesEnums,
//   overviewEnums,
//   overviewSteps,
// } from "../../../enums";

const SavingsInfo = () => {
  // const navigate = useNavigate();
  // const { activity, stepIndex } = useParams();
  return (
    <>
      <ItemListing principal={"Funds on Hold"} details="$0.00" />
      <ItemListing principal={"Overdraft Limit"} details="$50.00" />
      <ItemListing principal={"Available Funds"} details="$500.00" />
      <ItemListing principal={"Institution Number"} details="554" />
      <ItemListing principal={"Transit Number"} details="55519" />
      <ItemListing principal={"Account Number"} details="444-4444" />
    </>
  );
};

export default SavingsInfo;

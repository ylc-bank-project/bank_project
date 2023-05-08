import React, { useContext } from "react";
import styled from "styled-components";
import { InfoTip } from "../../../Shared/Tip";
import { BoldDiv, ItemListing } from "../../BankPageElements";
import {
  accountPagesEnums,
  overviewEnums,
  overviewSteps,
} from "../../../enums";
import { useNavigate, useParams } from "react-router-dom";
import { IntroModalContext } from "../../../context";

const FullEmptyDiv = styled.div`
  width: 100%;
  height: 10px;
`;

const SavingsTransactions = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const { introModalState, setIntroContext } = useContext(IntroModalContext);
  return (
    <>
      <ItemListing
        principal={"Deposit 0000000261883"}
        date={"5 Jan, 2020"}
        trans={"Internet banking - deposit"}
        details={"+$500.00"}
        isPositive
      />
    </>
  );
};

export default SavingsTransactions;

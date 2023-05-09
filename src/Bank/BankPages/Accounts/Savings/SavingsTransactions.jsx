import React, { useContext } from "react";
import styled from "styled-components";
import { InfoTip } from "../../../Shared/Tip";
import { BoldDiv, ItemListing } from "../../BankPageElements";
import {
  accountPagesEnums,
  overviewEnums,
  overviewSteps,
  transferFundsEnums,
  transferFundsSteps,
} from "../../../enums";
import { useNavigate, useParams } from "react-router-dom";
import { IntroModalContext } from "../../../context";

const FullEmptyDiv = styled.div`
  width: 100%;
  height: 10px;
`;

let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
const todayDate = `${day} ${month}, ${year}`;

const SavingsTransactions = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  // const { introModalState, setIntroContext } = useContext(IntroModalContext);

  const isConfirmIncrease =
    transferFundsSteps[stepIndex] === transferFundsEnums.confirmSavingsIncrease;

  return (
    <>
      {/* TODO: This should be step dependent */}
      <InfoTip
        tipContent={
          <div>
            Now you can see your savings account has $300 transferred to it from
            your chequing’s account.
          </div>
        }
        showTip={isConfirmIncrease}
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.SAVINGSHOME}/${
              accountPagesEnums.SAVINGSTRANSACTIONS
            }`
          );
        }}
        tipTarget={
          <ItemListing
            principal={"Deposit 0000000261884"}
            date={todayDate}
            trans={"Transfer - Chequing"}
            details={"+$300.00"}
            isPositive
          />
        }
      />

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

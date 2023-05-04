import React from "react";
import { InfoTip } from "../../../Shared/Tip";
import styled from "styled-components";
import { ItemListing } from "../../BankPageElements";
import { useNavigate, useParams } from "react-router-dom";
import {
  accountPagesEnums,
  overviewEnums,
  overviewSteps,
} from "../../../enums";

const AccountInformation = () => {
  const navigate = useNavigate();
  const { activity, stepIndex } = useParams();
  return (
    <>
      <InfoTip
        tipContent={
          <div>
            Funds on hold are deposits made to your account that are not yet
            available to withdraw. This sometimes happens when money is
            deposited through a bank machine.
          </div>
        }
        tipTarget={
          <ItemListing principal={"Funds on Hold"} details="$500.00" />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.hold}
      />
      <InfoTip
        tipContent={
          <div>
            Overdraft Limit is the maximum amount of money you can withdraw from
            your account after your balance reaches zero. There is typically a
            fee to use overdraft. At many banks, an overdraft fee can cost up to
            $35.
          </div>
        }
        tipTarget={
          <ItemListing principal={"Overdraft Limit"} details="$100.00" />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.overdraft}
      />
      <InfoTip
        tipContent={
          <div>
            Available funds is the amount available for immediate use in your
            account.
          </div>
        }
        tipTarget={
          <ItemListing principal={"Available Funds"} details="$17,623.00" />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.available}
      />
      <InfoTip
        tipContent={
          <div>
            An institution number is a 3-digit code that identifies which bank
            provider the account is associated with.
          </div>
        }
        tipTarget={
          <ItemListing principal={"Institution Number"} details="554" />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.institution}
      />
      <InfoTip
        tipContent={
          <div>
            A transit number is a 5-digit code that identifies where in Canada
            your bank is located.
          </div>
        }
        tipTarget={<ItemListing principal={"Transit Number"} details="55519" />}
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.transit}
      />
      <InfoTip
        tipContent={
          <div>
            An account number is a 7-digit number that identifies the owner of
            the account.
          </div>
        }
        tipTarget={
          <ItemListing principal={"Account Number"} details="555-5555" />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGINFO
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.accountNumber}
      />
    </>
  );
};

export default AccountInformation;

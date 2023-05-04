import React from "react";
import { InfoTip } from "../../../Shared/Tip";
import styled from "styled-components";
import { ItemListing } from "../../BankPageElements";

const AccountInformation = () => {
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
          <ItemListing
            // isSummary
            principal={"Funds on Hold"}
            details="$500.00"
          />
        }
        showTip={hold}
        {...{ step, setStep, allSteps }}
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
          <ItemListing
            // isSummary
            principal={"Overdraft Limit"}
            details="$100.00"
          />
        }
        showTip={overdraft}
        {...{ step, setStep, allSteps }}
      />
      <InfoTip
        tipContent={
          <div>
            Available funds is the amount available for immediate use in your
            account.
          </div>
        }
        tipTarget={
          <ItemListing
            // isSummary
            principal={"Available Funds"}
            details="$17,623.00"
          />
        }
        showTip={available}
        {...{ step, setStep, allSteps }}
      />
      <InfoTip
        tipContent={
          <div>
            An institution number is a 3-digit code that identifies which bank
            provider the account is associated with.
          </div>
        }
        tipTarget={
          <ItemListing
            // isSummary
            principal={"Institution Number"}
            details="554"
          />
        }
        showTip={institution}
        {...{ step, setStep, allSteps }}
      />
      <InfoTip
        tipContent={
          <div>
            A transit number is a 5-digit code that identifies where in Canada
            your bank is located.
          </div>
        }
        tipTarget={
          <ItemListing
            // isSummary
            principal={"Transit Number"}
            details="55519"
          />
        }
        showTip={transit}
        {...{ step, setStep, allSteps }}
      />
      <InfoTip
        tipContent={
          <div>
            An account number is a 7-digit number that identifies the owner of
            the account.
          </div>
        }
        tipTarget={
          <ItemListing
            // isSummary
            principal={"Account Number"}
            details="555-5555"
          />
        }
        showTip={accountNumber}
        {...{ step, setStep, allSteps }}
      />
    </>
  );
};

export default AccountInformation;

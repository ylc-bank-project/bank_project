import React, { useContext } from "react";
import styled from "styled-components";
import { InfoTip } from "../../../Shared/Tip";
import { BoldDiv, ItemListing } from "../../BankPageElements";
import {
  accountPagesEnums,
  activitiesEnums,
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

const Transactions = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const { introModalState, setIntroContext } = useContext(IntroModalContext);

  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;
  const isOverview = activity === activitiesEnums.ACCOUNTOVERVIEW;

  const isTransferFinal =
    isTransferFunds &&
    transferFundsSteps[stepIndex] === transferFundsEnums.finalReview;

  return (
    <>
      <InfoTip
        tipContent={
          <div>
            Here you can see the amount transferred from your chequing account
            to savings!
          </div>
        }
        showTip={isTransferFinal}
        onClick={() => setIntroContext({ isVisible: true, isIntro: false })}
        tipTarget={
          <ItemListing
            principal={"7788 8899-222"}
            date={todayDate}
            trans={"Transfer - Savings"}
            details={"-$300.00"}
          />
        }
      />

      <InfoTip
        tipContent={
          <>
            <div>
              On January 21st, $12.50 was spent at Books Galore. Point of Sale
              (POS) Interac Retail purchase means you made a purchase with your
              debit card.
            </div>
            {<br />}
            <div>
              The numbers you see represent the transaction number which is a
              special label that identifies the purchase. Every purchase will
              have a different transaction number.
            </div>
          </>
        }
        tipTarget={
          <ItemListing
            principal={"Books Galore 000009887767"}
            date={"Jan 21, 2020"}
            trans={"POS - Interac Retail purchase"}
            details={"-$12.50"}
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={
          isOverview && overviewSteps[stepIndex] === overviewEnums.wellRead
        }
      />
      <InfoTip
        tipContent={
          <>
            <div>
              On January 16th, $109.45 was debited from your account to pay a
              Taco Electric bill. An internet bill payment is made by sending
              the company money online through online banking.
            </div>
          </>
        }
        tipTarget={
          <ItemListing
            principal={"TACO ELECTRIC 0000376166356"}
            date={"Jan 16, 2020"}
            trans={"internet banking - Internet Bill Pay"}
            details={"-$109.45"}
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.taco}
      />
      <InfoTip
        tipContent={
          <>
            <div>
              On January 5th, $2000 was deposited (credited) in the account.
            </div>
          </>
        }
        tipTarget={
          <ItemListing
            principal={"Deposit 0000000261883"}
            date={"5 Jan, 2020"}
            trans={"Internet banking - deposit"}
            details={"+$2000.00"}
            isPositive
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.internetDeposit}
      />
      <InfoTip
        tipContent={
          <>
            <div>
              On January 1st, $96.00 was debited from the account to TD
              Insurance National. A preauthorized debit means instead of sending
              a payment, the owner of the account gave permission for a company
              to automatically withdraw funds. This typically happens monthly.
            </div>
            {<br />}
            <div>
              It’s a convenient way to pay bills on time. It is important to
              remember the date bill payments come out so that you have money in
              your account for it. If you forget you could go into the overdraft
              and have to pay a fee.
            </div>
          </>
        }
        tipTarget={
          <ItemListing
            principal={"Debit Td insurance nat'l"}
            date={"1 Jan, 2020"}
            trans={"electronic funds - transfer preauthorized debit"}
            details={"-$96.00"}
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={
          isOverview && overviewSteps[stepIndex] === overviewEnums.preAuth
        }
      />
      <ItemListing
        principal={"midnight sun co 000009767867"}
        date={"28 Dec, 2019"}
        trans={"POS - interac retail purchase"}
        details={"-$4.95"}
      />
      <ItemListing
        principal={"Toyota Canada 0000000763651"}
        date={"26 Dec, 2020"}
        trans={"internet banking - internet bill pay"}
        details={"-$320.00"}
      />
      <ItemListing
        principal={"E-transfer 00000736716"}
        date={"26 Dec, 2020"}
        trans={"internet banking - internet e-transfer"}
        details={"-$900.00"}
      />
      <InfoTip
        tipContent={
          <div>
            <div>
              The total amount spent (debited) in the account is $1422.90
            </div>
          </div>
        }
        tipTarget={
          <ItemListing
            isSummary
            principal={"Total debits"}
            details={"-$1422.90"}
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.totalDebits}
      />
      <InfoTip
        tipContent={
          <div>
            <div>
              The total amount deposited (credited) in the account is $2000.00
            </div>
          </div>
        }
        tipTarget={
          <ItemListing
            isSummary
            principal={"Total credits"}
            details="+$2000.00"
          />
        }
        onClick={() => {
          navigate(
            `/${activity}/${Number(stepIndex) + 1}/${
              accountPagesEnums.ACCOUNTS
            }/${accountPagesEnums.CHECKINGHOME}/${
              accountPagesEnums.CHECKINGTRANSACTIONS
            }`
          );
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.credits}
      />
      <InfoTip
        tipContent={
          <div>
            <div>
              <BoldDiv>
                $2000.00 (Total credits) - $1422.90 (Total debits) = $577.10
              </BoldDiv>
              {<br />}
              <div>$577.10 is left over this month.</div>
              {<br />}
            </div>
          </div>
        }
        tipTarget={<FullEmptyDiv />}
        onClick={() => {
          setIntroContext({ isVisible: true, isIntro: false });
        }}
        showTip={overviewSteps[stepIndex] === overviewEnums.creditsDebits}
        placement={"center"}
        showArrow={false}
      />
    </>
  );
};

export default Transactions;

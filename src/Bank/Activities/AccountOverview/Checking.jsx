import React from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import styled from "styled-components";
import { TransactionsDetails } from "../../Shared/BankPages";

const CheckingHeader = styled.div`
  ${(p) => p.theme.fonts.small_header};
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const AccountNumber = styled.div`
  color: grey;
  ${(p) => p.theme.fonts.large_button_text};
  text-align: center;
  padding-top: 5px;
`;

const NotedBalance = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  text-align: center;
  padding: 15px;
  font-weight: normal;
`;

const Balance = ({ setStep, step, allSteps, balance }) => {
  const BalanceContent = () => {
    return (
      <div>
        Balance shows the amount of money in your account, including any funds
        on hold.
        <BasicTipButton
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Continue
        </BasicTipButton>
      </div>
    );
  };
  return (
    <div>
      <BasicTooltip
        content={<BalanceContent />}
        showTip={allSteps[step] === balance}
        staticOnly={true}
        placement="bottom-center"
        triggerOffset={-10}
      >
        <NotedBalance>$18,023.00</NotedBalance>
      </BasicTooltip>
    </div>
  );
};

const ItemListingWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 60px);
  margin: 0 30px;
  padding: 30px 0;
  font-size: 20px;
  border-bottom: solid 1px ${(p) => (p.isSummary ? "transparent" : "lightgray")};
`;

const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemPrincipalText = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  text-transform: uppercase;
`;

const ItemSubTextContainer = styled.span`
  ${(p) => p.theme.fonts.large_button_text};
  font-weight: normal;
  text-transform: uppercase;
`;

const ItemDate = styled.span`
  padding-right: 20px;
`;

const ItemTransaction = styled.span``;

const ItemDetails = styled.span`
  color: ${(p) => (p.isPositive ? "green" : "black")};
`;

const CheckingHeaderContainer = styled.div``;

const TransactionsWrapper = styled.div`
  background: white;
  padding-bottom: 300px;
`;

const ItemListing = ({ principal, date, trans, details, ...rest }) => (
  <ItemListingWrapper {...rest}>
    <ItemTextContainer>
      <ItemPrincipalText>{principal}</ItemPrincipalText>
      {(date || trans) && (
        <ItemSubTextContainer>
          <ItemDate>{date}</ItemDate>
          <ItemTransaction>{trans}</ItemTransaction>
        </ItemSubTextContainer>
      )}
    </ItemTextContainer>
    <ItemDetails {...rest}>{details}</ItemDetails>
  </ItemListingWrapper>
);

const Checking = ({
  step,
  setStep,
  allSteps,
  transactions,
  wellRead,
  taco,
  internetDeposit,
  preAuth,
  totalDebits,
  credits,
  creditsDebits,
  hold,
  overdraft,
  available,
  institution,
  transit,
  accountNumber,
  setCheckingService,
  checkingTransactions,
  accountInfo,
  checkingInformation,
  checkingService,
  balance,
}) => {
  const CheckingHeaderInfo = () => (
    <CheckingHeaderContainer>
      <CheckingHeader>Chequing</CheckingHeader>
      <AccountNumber>5522 8899-222</AccountNumber>
      <Balance {...{ setStep, step, allSteps, balance }} />

      <TransactionsDetails
        transactionsClick={() => {
          setCheckingService(checkingTransactions);
          setStep(step + 1);
        }}
        detailsClick={() => {
          setCheckingService(checkingInformation);
          setStep(step + 1);
        }}
        transactionsDisabled={allSteps[step] !== transactions}
        detailsDisabled={allSteps[step] !== accountInfo}
        transactionsActive={checkingService !== checkingTransactions}
        detailsActive={checkingService !== checkingInformation}
        {...{
          allSteps,
          step,
          transactions,
          accountInfo,
        }}
      />
    </CheckingHeaderContainer>
  );
  const Transactions = () => {
    return (
      <TransactionsWrapper>
        <CheckingHeaderInfo />
        <InfoTip
          tipContent={
            <div>
              On January 21st, $12.50 was spent at Well Read Books. Point of
              Sale (POS) Interac Retail purchase means you made a purchase with
              your debit card. The numbers you see represents the transaction
              number which is a special label that identifies the purchase.
              Every purchase will have a different transaction number.
            </div>
          }
          tipTarget={
            <ItemListing
              principal={"Well-Read Books 000009887767"}
              date={"Jan 21, 2020"}
              trans={"POS - Interac Retail purchase"}
              details={"-$12.50"}
            />
          }
          showTip={wellRead}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              On January 16th, $109.45 was debited from your account to pay a
              Taco Electric bill.The numbers you see represents the transaction
              number which is a special label that identifies the purchase.
              Every purchase will have a different transaction number.
            </div>
          }
          tipTarget={
            <ItemListing
              principal={"TACO ELECTRIC 0000376166356"}
              date={"Jan 16, 2020"}
              trans={"internet banking - Internet Bill Pay"}
              details={"-$109.45"}
            />
          }
          showTip={taco}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              On January 5th, $2000 was deposited (credited) in the account. The
              numbers you see represents the transaction number which is a
              special label that identifies the purchase. Every purchase will
              have a different transaction number.
            </div>
          }
          tipTarget={
            <ItemListing
              principal={"Deposit 0000000261883"}
              date={"5 Jan, 2020"}
              trans={"Internet banking - internet deposit"}
              details={"+$2000.00"}
              isPositive
            />
          }
          showTip={internetDeposit}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              On January 1st, $96.00 was debited from your account to TD
              Insurance National. It was a preauthorized debit which means
              instead of sending a payment, a company withdraws funds from your
              bank account. It’s a convenient way to pay bills and make other
              payments automatically and has to be approved by the owner of the
              bank account first.
            </div>
          }
          tipTarget={
            <ItemListing
              principal={"Debit Td insurance nat'l"}
              date={"1 Jan, 2020"}
              trans={"electronic funds - transfer preauthorized debit"}
              details={"-$96.00"}
            />
          }
          showTip={preAuth}
          {...{ step, setStep, allSteps }}
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
              <div>The total under Debits is $1422.90</div>
            </div>
          }
          tipTarget={
            <ItemListing
              isSummary
              principal={"Total debits"}
              details={"-$1422.90"}
            />
          }
          showTip={totalDebits}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              <div>the total under Credits is $2000.00</div>
            </div>
          }
          tipTarget={
            <ItemListing
              isSummary
              principal={"Total credits"}
              details="+$2000.00"
            />
          }
          showTip={credits}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              <div>
                $2763.80 (credits) - $2606.19 (debits)= $157.61 was not spent
                this month. It can be put into a savings account or spent at a
                later date.
              </div>
            </div>
          }
          tipTarget={<span />}
          showTip={creditsDebits}
          {...{ step, setStep, allSteps }}
        />
      </TransactionsWrapper>
    );
  };

  const AccountInformation = () => {
    return (
      <div>
        <CheckingHeaderInfo />
        <InfoTip
          tipContent={
            <div>
              Funds on Hold are deposits made to your account that are not yet
              available to withdraw.
            </div>
          }
          tipTarget={<span>Funds on hold</span>}
          showTip={hold}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              Overdraft Limit is the maximum amount of money you can withdraw
              from your account after your balance reaches zero.
            </div>
          }
          tipTarget={<span>Overdraft Limit</span>}
          showTip={overdraft}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              Available Funds is your balance minus any funds on hold plus any
              overdraft limit (if applicable), representing money available for
              immediate use in your account.
            </div>
          }
          tipTarget={<span>Available funds</span>}
          showTip={available}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              An institution number is a 3- digit code that identifies which
              bank provider the account is associated with.
            </div>
          }
          tipTarget={<span>Institution #</span>}
          showTip={institution}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              A transit number is a 5- digit code that identifies where in
              Canada your bank is located.
            </div>
          }
          tipTarget={<span>Transit #</span>}
          showTip={transit}
          {...{ step, setStep, allSteps }}
        />
        <InfoTip
          tipContent={
            <div>
              An account number is a 7- digit number that identifies the owner
              of the account.
            </div>
          }
          tipTarget={<span>Account #</span>}
          showTip={accountNumber}
          {...{ step, setStep, allSteps }}
        />
      </div>
    );
  };

  return (
    <div>
      {checkingService === checkingTransactions ? (
        <Transactions />
      ) : checkingService === checkingInformation ? (
        <AccountInformation />
      ) : (
        <div>no service </div>
      )}
    </div>
  );
};

export default Checking;

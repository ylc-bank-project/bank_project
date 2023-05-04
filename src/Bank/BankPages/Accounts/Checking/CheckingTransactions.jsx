import React from "react";

const Transactions = () => {
  return (
    <>
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
        showTip={wellRead}
        {...{ step, setStep, allSteps }}
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
        showTip={taco}
        {...{ step, setStep, allSteps }}
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
        showTip={internetDeposit}
        {...{ step, setStep, allSteps }}
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
        showTip={totalDebits}
        {...{ step, setStep, allSteps }}
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
        showTip={credits}
        {...{ step, setStep, allSteps }}
      />
      <InfoTip
        tipContent={
          <div>
            <div>
              <BoldDiv>
                $2000.00 (Total credits)- $1422.90 (Total debits) = $577.10
              </BoldDiv>
              {<br />}
              <div>$577.10 is left over this month.</div>
            </div>
          </div>
        }
        tipTarget={<FullEmptyDiv />}
        showTip={creditsDebits}
        placement={"center"}
        showArrow={false}
        {...{ step, setStep, allSteps }}
      />
    </>
  );
};

export default Transactions;

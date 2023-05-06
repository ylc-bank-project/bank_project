import React from "react";
// import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";

// import { PaymentMethods } from "./PaymentMethods";

// import {
//   BankingBackground,
//   BankingHeader,
//   BankingContainer,
//   CleanBackground,
//   BankingFooter,
// } from "../../BankPages/BankPageElements";

import "react-datepicker/dist/react-datepicker.css";
import { Outlet } from "react-router-dom";

/**
 * Start in "All accounts" page with payments at the bottom
 * Go to Payment Options
 * Go to Bill Payments (list of payees)
 * Go to add Payee page
 * Go to verify payee page
 * Go to pay Bill Payments (list of payees)
 * Go to bill payment page
 * Go to verify bill payment
 */

// const PayeeControlsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 10px 0;
//   border-bottom: 1px solid lightgray;
// `;

// const ChooseText = styled.div`
//   ${(p) => p.theme.fonts.extra_small_header};
// `;

// const AddPayeeButton = styled.button`
//   /* background: ${(p) => p.theme.colors.bank_blue}; */
//   background: white;
//   width: 150px;
//   height: 50px;
//   /* color: white; */
//   cursor: pointer;
//   ${(p) => p.theme.fonts.large_button_text};
//   border-radius: 10px;
//   border: none;
//   color: grey;
// `;

// const ListOfPayees = ({
//   setPaymentStage,
//   setStep,
//   step,
//   addVerifyPayeeStage,
//   tacoAdded,
//   payVerifyBillStage,
//   inputedAccountNumber,
// }) => {
//   return (
//     <div>
//       <PayeeControlsContainer>
//         <ChooseText>Select a Payee</ChooseText>
//         <InfoTip
//           tipContent={<div>Choose "Add Payee".</div>}
//           tipTarget={
//             <AddPayeeButton
//               onClick={() => {
//                 setPaymentStage(addVerifyPayeeStage);
//                 setStep(step + 1);
//               }}
//               disabled={allSteps[step] !== addEditPayee}
//             >
//               Add Payee
//             </AddPayeeButton>
//           }
//           showTip={addEditPayee}
//           showButton={false}
//           {...{ step, setStep, allSteps }}
//         />
//       </PayeeControlsContainer>
//       {tacoAdded && (
//         <InfoTip
//           tipContent={
//             <div>
//               <div>
//                 You did it! Taco Electric is set up for online bill payments.
//                 You just need to pay the bill!
//               </div>
//               <br />
//               <div>
//                 Click on "Taco Electric". It will take you to a screen where
//                 you’ll choose an account, the date of payment and the amount
//                 you’re paying.
//               </div>
//             </div>
//           }
//           tipTarget={
//             <ItemListing
//               onClick={() => {
//                 setPaymentStage(payVerifyBillStage);
//                 setStep(step + 1);
//               }}
//               principal={"Taco Electric"}
//               date={inputedAccountNumber}
//               details={"PAY"}
//               separateDetails={true}
//             />
//           }
//           showTip={chooseTaco}
//           showButton={false}
//           {...{ step, setStep, allSteps }}
//         />
//       )}
//       <ItemListing
//         principal={"Toyota Canada"}
//         date={"20193924UQC685"}
//         details={"PAY"}
//         separateDetails={true}
//       />
//       <ItemListing
//         principal={"Bell Canada"}
//         date={"9988225511"}
//         details={"PAY"}
//         separateDetails={true}
//       />
//       <ItemListing
//         principal={"NSLSC"}
//         date={"088811"}
//         details={"PAY"}
//         separateDetails={true}
//       />
//     </div>
//   );
// };

// const BillPaymentsContainer = styled.div`
//   min-height: calc(100vh - 150px);
//   background: white;
//   padding-bottom: 150px;
// `;

// const BillPayments = (props) => {
//   const { paymentStage, payeesStage, addVerifyPayeeStage, payVerifyBillStage } =
//     props;
//   return (
//     <BillPaymentsContainer>
//       {paymentStage === payeesStage ? (
//         <ListOfPayees {...props} />
//       ) : paymentStage === addVerifyPayeeStage ? (
//         <AddVerifyPayee {...props} />
//       ) : paymentStage === payVerifyBillStage ? (
//         <PayVerifyBill {...props} />
//       ) : (
//         <div>No Stage </div>
//       )}
//     </BillPaymentsContainer>
//   );
// };

// const addDays = (date, days) => {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// };

//Main Pages
// const allAccountsPage = "allAccounts";
// const billPaymentsPage = "billPaymentsPage";

const MakingPayments = () => {
  // const [payTabActive, setPayTabActive] = useState("home");

  // Main Page State
  // const [mainPage, setMainPage] = useState(allAccountsPage);
  // const [mainPage, setMainPage] = useState(undefined);
  // const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(false);
  // const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(true);

  // Bill Payment stages
  // const payeesStage = "payeesStage";
  // const addVerifyPayeeStage = "addVerifyPayeeStage";
  // const payVerifyBillStage = "payVerifyBillStage";

  // State for bill payments
  // const TacoTitle = "Taco Electric";
  // const [tacoAdded, setTacoAdded] = useState(false);
  // const [paymentStage, setPaymentStage] = useState(payeesStage);

  // const [companyTitle, setCompanyTitle] = useState("");

  // const [inputedAccountNumber, setInputedAccountNumber] = useState("");

  // const [isVerifyPayee, setVerifyPayee] = useState(false);

  // const [isVerifyBill, setVerifyBill] = useState(false);

  // const [accountType, setAccountType] = useState(undefined);

  // const [billAmount, setBillAmount] = useState(undefined);

  // const [billDate, setBillDate] = useState(addDays(new Date(), 5));

  // const paymentsClick = () => {
  //   setStep(step + 1);
  //   setPaymentMethodsVisible(true);
  //   setPayTabActive("pay");
  // };

  return (
    <>
      {/* <BankingBackground>
      <BankingHeader />
      <CleanBackground>
        <MarginedContainer> */}
      {/* <BankingContainer> */}
      {/* {mainPage === allAccountsPage ? (
              <AllAccounts
                {...{
                  setStep,
                  allSteps,
                  // setPaymentMethodsVisible,
                  setMainPage,
                  step,
                  // paymentMethodsVisible,
                }}
              />
            ) : ( */}
      {/* <BillPayments
              {...{
                //general
                paymentStage,
                payeesStage,
                addVerifyPayeeStage,
                payVerifyBillStage,
                //list of payees
                setPaymentStage,
                setStep,
                step,
                tacoAdded,
                inputedAccountNumber,
                setInputedAccountNumber,
                //addVerify payees
                isVerifyPayee,
                setTacoAdded,
                companyTitle,
                TacoTitle,
                setCompanyTitle,
                setVerifyPayee,
                confirmPayee,
                allSteps,
                addCompanyName,
                addBillNumber,
                goToVerify,
                //payVerifyBill
                isVerifyBill,
                setVerifyBill,
                setAccountType,
                setBillAmount,
                setBillDate,
                accountType,
                billAmount,
                billDate,
                confirmBillPayment,
                chooseDebitAccount,
                enterAmount,
                enterDate,
                reviewBillPayment,
              }}
            /> */}
      <Outlet />
      {/* )} */}
      <IntroOutro />
      {/* {paymentMethodsVisible && (
              <PaymentMethods
                {...{
                  setStep,
                  setPaymentMethodsVisible,
                  setMainPage,
                  step,
                  billPaymentsStep,
                  billPaymentsPage,
                  allSteps,
                }}
              />
            )} */}
      {/* </BankingContainer>
        </MarginedContainer>
      </CleanBackground> */}

      {/* <BankingFooter
        {...{
          step,
          setStep,
          allSteps,
          paymentsClick,
          clickPayments,
        }}
        isActive={payTabActive}
      /> */}
      {/* </BankingBackground> */}
    </>
  );
};

export default MakingPayments;

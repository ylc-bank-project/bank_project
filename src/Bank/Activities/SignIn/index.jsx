import React, { useContext, useState } from "react";
// import NumberFormat from "react-number-format";
// import styled from "styled-components";

import { Outlet, useParams } from "react-router-dom";
import IntroOutro from "../../IntroOutro";
import { ModalContext } from "../../context";

// const allSteps = [FirstStep, SecondStep, ThirdStep, FourthStep, FifthStep];

// const StyledSignInWrapper = styled.div`
//   grid-column: span 12;
//   text-align: center;
// `;

// const InputContainer = styled.div`
//   padding: 15px 0;
// `;

// const StyledNumberFormat = styled(NumberFormat)`
//   border: none;
//   border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
//   width: 100%;
//   ${(p) => p.theme.fonts.body_text};
//   font-weight: normal;
//   height: 40px;
//   ::placeholder {
//     color: ${(p) => p.theme.colors.ylc_blue};
//   }
// `;

// const StyledInput = styled.input`
//   border: none;
//   border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
//   width: 100%;
//   ${(p) => p.theme.fonts.body_text};
//   font-weight: normal;
//   height: 40px;
//   ::placeholder {
//     color: ${(p) => p.theme.colors.ylc_blue};
//   }
// `;

// const PasswordLabel = styled.label`
//   ${(p) => p.theme.fonts.body_text};
//   color: ${(p) => p.theme.colors.ylc_blue};
//   display: flex;
// `;

// const RadioInputContainer = styled.span`
//   padding: 10px;
//   width: 50px;
// `;

// const FullSpan = styled.span`
//   width: 100%;
//   display: block;
// `;

const SignIn = (props) => {
  console.log("singin props", props);
  const { currentActivity, endCurrentActivity } = props;
  // const [introOutroVisible, setIntroOutroVisible] = useState(true);
  // const [isIntro, setIsIntro] = useState(true);

  const { modalState, setModalState } = useContext(ModalContext);

  // const { stepIndex } = useParams();

  // FIRST STEP IS 1 (should be 0 in next version)
  // const [step, setStep] = useState(0);

  // // FOR TESTING PURPOSES
  // // const [step, setStep] = useState(4);

  // const [readyToSign, setReadyToSign] = useState(false);

  // // FOR TESTING PURPOSES
  // // const [readyToSign, setReadyToSign] = useState(true);

  // const [introOutroVisible, setIntroOutroVisible] = useState(true);

  // // FOR TESTING PURPOSES
  // // const [introOutroVisible, setIntroOutroVisible] = useState(false);

  // const [isIntro, setIsIntro] = useState(true);
  // const [cardNumber, setCardNumber] = useState(undefined);
  // const [password, setPassword] = useState(undefined);
  // const [saveToggled, setSaveToggled] = useState(false);

  // const PreSignIn = () => (
  //   <StyledSignInWrapper>
  //     <BasicTooltip
  //       content={<FirstStep />}
  //       showTip={step === 0}
  //       staticOnly={true}
  //       placement="bottom-center"
  //     >
  //       <SignInButton
  //         onClick={() => {
  //           setReadyToSign(true);
  //           setStep(step + 1);
  //         }}
  //       >
  //         Sign In
  //       </SignInButton>
  //     </BasicTooltip>
  //   </StyledSignInWrapper>
  // );

  return (
    <>
      <Outlet />
      <IntroOutro
        closeModal={() =>
          setModalState({ isVisible: false, isIntro: modalState.isIntro })
        }
        endExercise={() => endCurrentActivity()}
        currentActivity={currentActivity}
        visible={modalState.isVisible}
        isIntro={modalState.isIntro}
      />
    </>
    //   <>
    //     <BankingBackground>
    //       <MarginedContainer>
    //         <BankingLogo />
    //         <BankHeader>Welcome</BankHeader>
    //         {readyToSign ? (
    //           <SignInContainer>
    //             <InputContainer>
    //               <BasicTooltip
    //                 content={<SecondStep {...{ cardNumber, setStep, step }} />}
    //                 showTip={step === 1}
    //                 staticOnly={true}
    //                 tipContentStyles={{ overflow: "scroll" }}
    //                 maxHeight={500}
    //               >
    //                 <StyledNumberFormat
    //                   onChange={(e) => setCardNumber(e.target.value)}
    //                   format="#### #### #### ####"
    //                   placeholder={"Card Number"}
    //                 />
    //               </BasicTooltip>
    //             </InputContainer>
    //             <InputContainer>
    //               <BasicTooltip
    //                 content={<ThirdStep {...{ password, setStep, step }} />}
    //                 showTip={step === 2}
    //                 staticOnly={true}
    //                 maxHeight={500}
    //               >
    //                 <StyledInput
    //                   onChange={(e) => setPassword(e.target.value)}
    //                   type="password"
    //                   placeholder={"Password"}
    //                 />
    //               </BasicTooltip>
    //               <BasicTooltip
    //                 content={<FourthStep {...{ setStep, step }} />}
    //                 showTip={step === 3}
    //                 staticOnly={true}
    //                 placement="center"
    //                 showArrow={false}
    //               ></BasicTooltip>
    //               <FullSpan />
    //               <BasicTooltip />
    //             </InputContainer>
    //             <InputContainer>
    //               <PasswordLabel>
    //                 Save password?
    //                 <BasicTooltip
    //                   content={
    //                     <FifthStep
    //                       {...{ setIsIntro, setIntroOutroVisible, saveToggled }}
    //                     />
    //                   }
    //                   showTip={step === 4}
    //                   staticOnly={true}
    //                 >
    //                   <RadioInputContainer>
    //                     <input
    //                       type="checkbox"
    //                       checked={saveToggled}
    //                       onChange={() =>
    //                         setSaveToggled(saveToggled ? false : true)
    //                       }
    //                     />
    //                   </RadioInputContainer>
    //                 </BasicTooltip>
    //               </PasswordLabel>
    //             </InputContainer>
    //           </SignInContainer>
    //         ) : (
    //           <PreSignIn />
    //         )}
    //         <IntroOutro
    //           closeModal={() => setIntroOutroVisible(false)}
    //           endExercise={() => endCurrentActivity()}
    //           currentActivity={currentActivity}
    //           visible={introOutroVisible}
    //           isIntro={isIntro}
    //         />
    //       </MarginedContainer>
    //     </BankingBackground>
    //     <Stepper
    //       {...{ setStep, step, allSteps }}
    //       onBack={() => {
    //         if (step === 1) {
    //           setReadyToSign(false);
    //         }
    //       }}
    //     />
    // </>
  );
};

export default SignIn;

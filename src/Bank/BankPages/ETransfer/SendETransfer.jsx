import React, { useEffect, useState } from "react";
import { InfoTip } from "../../Shared/Tip";
import {
  BoldDiv,
  ContinueButton,
  ContinueButtonContainer,
  FormContainer,
  InputContainer,
  LabelInputContainer,
  StyledLabel,
  StyledNumberFormat,
  StyledSelect,
  StyledTextInput,
  TransactionSubtitle,
} from "../BankPageElements";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  CHEQUINGACCOUNT,
  EXTRAMESSAGE,
  LANDLORDAMT,
  SAVINGSACCOUNT,
  SECRETA,
  SECRETQ,
  eTransferEnums,
  eTransferPagesEnums,
  eTransferSteps,
} from "../../enums";

const SendETransfer = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const [payAmt, setPayAmt] = useState(undefined);
  const [fromAcc, setFromAcc] = useState(undefined);
  const [secretQInput, setSecretQ] = useState(undefined);
  const [secretAInput, setSecretA] = useState(undefined);
  const [answer2, setAnswer2] = useState(undefined);
  const [messageInput, setMessage] = useState(undefined);
  // const [message, setMessage] = useState(undefined);

  const is = (enumStep) => {
    return eTransferSteps[stepIndex] === enumStep;
  };

  const isEnterAmount = is(eTransferEnums.enterAmount);
  const isChooseAccount = is(eTransferEnums.chooseAccount);
  const isChooseSecurityQ = is(eTransferEnums.chooseSecurityQuestion);
  const isEnterSecurityA = is(eTransferEnums.enterQuestionAnswer);
  const isReenterA = is(eTransferEnums.reEnterAnswer);
  const isAddMessage = is(eTransferEnums.addMessage);
  const isAddPersonal = is(eTransferEnums.addPersonalInfo);
  const isGoToSummary = is(eTransferEnums.goToSummary);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.enterAmount)) {
      setPayAmt(LANDLORDAMT);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.chooseAccount)) {
      setFromAcc(CHEQUINGACCOUNT);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (
      stepIndex > eTransferSteps.indexOf(eTransferEnums.chooseSecurityQuestion)
    ) {
      setSecretQ(SECRETQ);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (
      stepIndex > eTransferSteps.indexOf(eTransferEnums.enterQuestionAnswer)
    ) {
      setSecretA(SECRETA);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.reEnterAnswer)) {
      setAnswer2(SECRETA);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.addMessage)) {
      setMessage(EXTRAMESSAGE);
    }
  }, [stepIndex]);

  return (
    <InputContainer>
      <FormContainer subtitle={"Enter E-Transfer Details"}>
        <InfoTip
          tipContent={
            <div>
              Enter amount to transfer. For this exercise enter:{" "}
              <BoldDiv>{LANDLORDAMT}</BoldDiv>
            </div>
          }
          showTip={isEnterAmount}
          showButton={true}
          buttonDisabled={payAmt !== LANDLORDAMT}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="transfer-amount">
                Amount:
              </StyledLabel>
              <StyledNumberFormat
                id="transfer-amount"
                onChange={(e) => setPayAmt(e.target.value)}
                prefix={"$"}
                placeholder="Choose Amount"
                value={payAmt}
                disabled={!isEnterAmount}
              />
            </LabelInputContainer>
          }
        />
        <InfoTip
          tipContent={<div>Select "Chequing"</div>}
          showTip={isChooseAccount}
          showButton={true}
          buttonDisabled={fromAcc !== CHEQUINGACCOUNT}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="from-select">
                From Account:
              </StyledLabel>
              <StyledSelect
                value={fromAcc}
                id="from-select"
                onChange={(e) => {
                  setFromAcc(e.target.value);
                }}
              >
                <option value={""} hidden>
                  Choose Account
                </option>
                <option value={CHEQUINGACCOUNT}>{CHEQUINGACCOUNT}</option>
                <option value={SAVINGSACCOUNT}>{SAVINGSACCOUNT}</option>
              </StyledSelect>
            </LabelInputContainer>
          }
        />
        <InfoTip
          tipContent={
            <div>
              A security question is an added safety measure to ensure your
              funds will be received by the correct person. Choose something
              that is unique to the person you are sending it to. Sometimes this
              option will not appear if the person you are sending the money to
              has their account set up for auto deposit. For this exercise,
              enter this security question:
              <BoldDiv>{SECRETQ}</BoldDiv>
            </div>
          }
          showTip={isChooseSecurityQ}
          showButton={true}
          buttonDisabled={secretQInput !== SECRETQ}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="secretQ">
                Security Question:
              </StyledLabel>
              <StyledTextInput
                width={"250px"}
                id="secretQ"
                type="text"
                onChange={(e) => {
                  setSecretQ(e.target.value);
                }}
                value={secretQInput}
                disabled={!isChooseSecurityQ}
                placeholder="Enter Security Question"
              />
            </LabelInputContainer>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Now enter the answer to the question. For this exercise, enter:
              <BoldDiv>{SECRETA}</BoldDiv>
            </div>
          }
          showTip={isEnterSecurityA}
          showButton={true}
          buttonDisabled={secretAInput !== SECRETA}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="secretA">
                Security Answer:
              </StyledLabel>
              <StyledTextInput
                id="secretA"
                type="text"
                onChange={(e) => {
                  setSecretA(e.target.value);
                }}
                value={secretAInput}
                disabled={!isEnterSecurityA}
                placeholder="Enter Answer"
              />
            </LabelInputContainer>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Reenter the answer to confirm that it is correct. As a reminder,
              it is: <strong>{SECRETA}</strong>
            </div>
          }
          showTip={isReenterA}
          showButton={true}
          buttonDisabled={answer2 !== SECRETA}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="reenter">
                Reenter Answer:
              </StyledLabel>
              <StyledTextInput
                id="reenter"
                type="text"
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
                value={answer2}
                disabled={!isReenterA}
                placeholder="Reenter Answer"
              />
            </LabelInputContainer>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Adding a message is optional but can sometimes be helpful for
              records. In this case, it can be helpful to keep track of your
              payments to ensure you are not falling behind. For this exercise,
              enter:
              <BoldDiv>{EXTRAMESSAGE}</BoldDiv>
            </div>
          }
          showTip={isAddMessage}
          showButton={true}
          buttonDisabled={messageInput !== EXTRAMESSAGE}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.SENDETRANSFER}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel width={"200px"} htmlFor="messageOptional">
                Message (optional):
              </StyledLabel>
              <StyledTextInput
                id="messageOptional"
                type="text"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={messageInput}
                disabled={!isAddMessage}
                placeholder="Enter Message"
              />
            </LabelInputContainer>
          }
        />
        <LabelInputContainer>
          <StyledLabel width={"200px"} htmlFor="personalInfo">
            Your information:
          </StyledLabel>
          <StyledTextInput
            id="personalInfo"
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={"heyitsme@email.com"}
            disabled={true}
          />
        </LabelInputContainer>
        <ContinueButtonContainer>
          <InfoTip
            tipContent={<div>Choose "Continue"</div>}
            showTip={isGoToSummary}
            showButton={false}
            tipTarget={
              <ContinueButton
                disabled={!isGoToSummary}
                onClick={() => {
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      eTransferPagesEnums.ETHOME
                    }/${eTransferPagesEnums.VERIFYETRANSFER}`
                  );
                }}
              >
                Continue
              </ContinueButton>
            }
          />
        </ContinueButtonContainer>
      </FormContainer>
    </InputContainer>
  );
};

export default SendETransfer;

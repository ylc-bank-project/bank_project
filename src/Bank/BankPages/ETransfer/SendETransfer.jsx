import React, { useState } from "react";
import { InfoTip } from "../../Shared/Tip";
import {
  BoldDiv,
  InputContainer,
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

const Container = styled.div`
  /* min-height: calc(100vh - 150px); */
  background: white;
  padding-bottom: 50px;
`;

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

  return (
    <InputContainer>
      <Container>
        <TransactionSubtitle>Enter E-Transfer Details</TransactionSubtitle>
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
            <div>
              <StyledLabel htmlFor="from-select">Amount:</StyledLabel>
              <StyledNumberFormat
                id="transfer-amount"
                onChange={(e) => setPayAmt(e.target.value)}
                prefix={"$"}
                placeholder="Choose Amount"
                value={payAmt}
                disabled={!isEnterAmount}
              />
            </div>
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
            <div>
              <StyledLabel htmlFor="from-select">From Account:</StyledLabel>
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
            </div>
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
            <div>
              <StyledLabel htmlFor="secretQ">Security Question:</StyledLabel>
              <StyledTextInput
                id="secretQ"
                type="text"
                onChange={(e) => {
                  setSecretQ(e.target.value);
                }}
                value={secretQInput}
                disabled={!isChooseSecurityQ}
              />
            </div>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Now enter:
              <BoldDiv>{SECRETA}</BoldDiv>
              for the answer to the question.
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
            <div>
              <StyledLabel htmlFor="secretQ">Security Answer:</StyledLabel>
              <StyledTextInput
                id="secretQ"
                type="text"
                onChange={(e) => {
                  setSecretA(e.target.value);
                }}
                value={secretAInput}
                disabled={!isEnterSecurityA}
              />
            </div>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Reenter the answer to confirm. As a reminder, it is:
              <BoldDiv>{SECRETA}</BoldDiv>
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
            <div>
              <StyledLabel htmlFor="secretQ">Reenter Answer:</StyledLabel>
              <StyledTextInput
                id="secretQ"
                type="text"
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
                value={answer2}
                disabled={!isReenterA}
              />
            </div>
          }
        />
        <InfoTip
          tipContent={
            <div>
              Adding a message is optional but can sometimes be helpful for
              records. In this case, it can be helpful to keep track of your
              payments to ensure you are not falling behind. Enter:
              <BoldDiv>{EXTRAMESSAGE}</BoldDiv>
            </div>
          }
          showTip={isAddMessage}
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
            <div>
              <StyledLabel htmlFor="secretQ">Reenter Answer:</StyledLabel>
              <StyledTextInput
                id="secretQ"
                type="text"
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
                value={answer2}
                disabled={!isReenterA}
              />
            </div>
          }
        />
      </Container>
    </InputContainer>
  );
};

export default SendETransfer;

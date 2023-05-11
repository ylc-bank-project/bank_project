import React, { useContext } from "react";
import { InfoTip } from "../../Shared/Tip";
import {
  ContinueButton,
  ContinueButtonContainer,
  FormContainer,
  InputContainer,
  StyledLabel,
  StyledNumberFormat,
  StyledSelect,
  StyledTextInput,
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
import { IntroModalContext } from "../../context";

const FullEmptyDiv = styled.div`
  width: 100%;
  height: 10px;
`;

const VerifyETransfer = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const { setIntroContext } = useContext(IntroModalContext);

  const is = (enumStep) => {
    return eTransferSteps[stepIndex] === enumStep;
  };

  const isReview = is(eTransferEnums.reviewSummary);
  const isSend = is(eTransferEnums.clickSend);

  return (
    <InputContainer>
      <FormContainer subtitle={"Enter E-Transfer Details"}>
        <InfoTip
          tipContent={
            <div>
              Review the summary of the E-Transfer before ending to ensure all
              information is correct
            </div>
          }
          showTip={isReview}
          placement={"center"}
          showArrow={false}
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.VERIFYETRANSFER}`
            );
          }}
          tipTarget={<FullEmptyDiv />}
        />
        <div>
          <StyledLabel width={"200px"} htmlFor="from-select">
            Amount:
          </StyledLabel>
          <StyledNumberFormat
            prefix={"$"}
            value={`${LANDLORDAMT}`}
            disabled={true}
          />
        </div>

        <div>
          <StyledLabel width={"200px"} htmlFor="from-select">
            From Account:
          </StyledLabel>
          <StyledSelect
            value={CHEQUINGACCOUNT}
            id="from-select"
            disabled={true}
          >
            <option value={""} hidden>
              Choose Account
            </option>
            <option value={CHEQUINGACCOUNT}>{CHEQUINGACCOUNT}</option>
            <option value={SAVINGSACCOUNT}>{SAVINGSACCOUNT}</option>
          </StyledSelect>
        </div>

        <div>
          <StyledLabel width={"200px"} htmlFor="secretQ">
            Security Question:
          </StyledLabel>
          <StyledTextInput
            id="secretQ"
            type="text"
            value={SECRETQ}
            disabled={true}
          />
        </div>

        <div>
          <StyledLabel width={"200px"} htmlFor="secretQ">
            Security Answer:
          </StyledLabel>
          <StyledTextInput
            id="secretQ"
            type="text"
            value={SECRETA}
            disabled={true}
          />
        </div>
        <div>
          <StyledLabel width={"200px"} htmlFor="secretQ">
            Message (optional):
          </StyledLabel>
          <StyledTextInput
            id="secretQ"
            type="text"
            value={EXTRAMESSAGE}
            disabled={true}
          />
        </div>

        <div>
          <StyledLabel width={"200px"} htmlFor="secretQ">
            Your information:
          </StyledLabel>
          <StyledTextInput
            id="secretQ"
            type="text"
            value={"heyitsme@email.com"}
            disabled={true}
          />
        </div>
        <ContinueButtonContainer>
          <InfoTip
            tipContent={<div>Choose "Send"</div>}
            showTip={isSend}
            showButton={false}
            tipTarget={
              <ContinueButton
                disabled={!isSend}
                onClick={() => {
                  setIntroContext({ isVisible: true, isIntro: false });
                }}
              >
                Send
              </ContinueButton>
            }
          />
        </ContinueButtonContainer>
      </FormContainer>
    </InputContainer>
  );
};

export default VerifyETransfer;

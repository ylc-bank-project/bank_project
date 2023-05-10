import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BoldDiv,
  ContinueButton,
  ContinueButtonContainer,
  FormContainer,
  InputContainer,
  LabelInputContainer,
  StyledLabel,
  StyledTextInput,
  TransactionSubtitle,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import {
  LANDLORDEMAIL,
  LANDLORDNAME,
  eTransferEnums,
  eTransferPagesEnums,
  eTransferSteps,
} from "../../enums";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const [inputName, setInputName] = useState(undefined);
  const [inputEmail, setInputEmail] = useState(undefined);

  const is = (enumType) => {
    return eTransferSteps[stepIndex] === enumType;
  };

  const isEnterName = is(eTransferEnums.enterName);
  const isEnterEmail = is(eTransferEnums.enterEmail);
  const isAddContact = is(eTransferEnums.addContact);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.enterName)) {
      setInputName(LANDLORDNAME);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (stepIndex > eTransferSteps.indexOf(eTransferEnums.enterEmail)) {
      setInputEmail(LANDLORDEMAIL);
    }
  }, [stepIndex]);

  return (
    <InputContainer>
      <FormContainer subtitle={"Add New Contact"}>
        <InfoTip
          placement="bottom-center"
          tipContent={
            <div>
              Enter the name of the person you will be sending the money too, if
              you have multiple people with the same name or don’t know
              someone’s full name you can put a descriptive word to describe
              them. Enter Name:
              <BoldDiv>{LANDLORDNAME}</BoldDiv>
            </div>
          }
          showTip={isEnterName}
          buttonDisabled={inputName !== LANDLORDNAME || !isEnterName}
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.ETADDCONTACT}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel htmlFor="name" width={"50px"}>
                Name:{" "}
              </StyledLabel>
              <StyledTextInput
                id="name"
                type="text"
                width={"300px"}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                value={inputName}
                placeholder="Insert Name Here"
              />
            </LabelInputContainer>
          }
        />
        <InfoTip
          placement="bottom-center"
          tipContent={
            <div>
              Now enter the email address of the person receiving the money for
              this activity enter: <BoldDiv>{LANDLORDEMAIL}</BoldDiv>
            </div>
          }
          showTip={isEnterEmail}
          buttonDisabled={inputEmail !== LANDLORDEMAIL || !isEnterEmail}
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                eTransferPagesEnums.ETHOME
              }/${eTransferPagesEnums.ETADDCONTACT}`
            );
          }}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel htmlFor="email" width={"50px"}>
                Email:{" "}
              </StyledLabel>
              <StyledTextInput
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
                id="email"
                type="email"
                placeholder="Insert Email Here"
              />
            </LabelInputContainer>
          }
        />

        <ContinueButtonContainer>
          <InfoTip
            tipContent={<div>Choose "Add Contact"</div>}
            showTip={isAddContact}
            showButton={false}
            tipTarget={
              <ContinueButton
                disabled={!isAddContact}
                onClick={() => {
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      eTransferPagesEnums.ETHOME
                    }/${eTransferPagesEnums.ETCONTACTS}`
                  );
                }}
              >
                Add Contact
              </ContinueButton>
            }
          />
        </ContinueButtonContainer>
      </FormContainer>
    </InputContainer>
  );
};

export default AddContact;

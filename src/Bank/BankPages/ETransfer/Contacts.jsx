import React from "react";
import {
  BankingContainer,
  BillPaymentsContainer,
  BoldDiv,
  ItemListing,
  TransactionSubtitle,
} from "../BankPageElements";
import plus from "../../assets/plus.png";
import styled from "styled-components";
import { InfoTip } from "../../Shared/Tip";
import {
  LANDLORDEMAIL,
  LANDLORDNAME,
  activitiesEnums,
  eTransferEnums,
  eTransferPagesEnums,
  eTransferSteps,
} from "../../enums";
import { useNavigate, useParams } from "react-router-dom";

const AddContactContainer = styled.div`
  width: calc(100% - 60px);
  height: 50px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* border-bottom: solid 1px ${(p) =>
    p.isSummary ? "transparent" : "lightgray"}; */
`;

const PlusContainer = styled.div`
  width: 30px;
  height: 30px;
  padding-right: 20px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const AddContactText = styled.div`
  ${(p) => p.theme.fonts.body_text_bold}
`;

const AddContact = ({ onClick, disabled }) => {
  return (
    <AddContactContainer {...{ onClick, disabled }}>
      <PlusContainer>
        <img src={plus} alt="" />
      </PlusContainer>

      <AddContactText>Add A New Contact</AddContactText>
    </AddContactContainer>
  );
};

const Contacts = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const isEtransfer = activitiesEnums.ETRANSFER === activity;

  const isAddNewContact =
    eTransferSteps[stepIndex] === eTransferEnums.addNewContact;

  const isSelectNewContact =
    eTransferSteps[stepIndex] === eTransferEnums.chooseNewContact;

  const isNewContact = isEtransfer && stepIndex >= 5;

  return (
    <BankingContainer>
      <BillPaymentsContainer>
        <TransactionSubtitle>Select A Contact</TransactionSubtitle>
        <InfoTip
          tipContent={<div>Choose "Add A New Contact".</div>}
          showButton={false}
          showTip={isAddNewContact}
          tipTarget={
            <AddContact
              disabled={!isAddNewContact}
              onClick={() => {
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    eTransferPagesEnums.ETHOME
                  }/${eTransferPagesEnums.ETADDCONTACT}`
                );
              }}
            />
          }
        />
        {isNewContact && (
          <InfoTip
            tipContent={
              <div>
                Select your new contact: <BoldDiv>{LANDLORDNAME}</BoldDiv>
              </div>
            }
            showTip={isSelectNewContact}
            showButton={false}
            placement="bottom-center"
            tipTarget={
              <ItemListing
                principal={LANDLORDNAME}
                date={LANDLORDEMAIL}
                details={""}
                separateDetails={true}
                lowercase
                disabled={!isSelectNewContact}
                onClick={() => {
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      eTransferPagesEnums.ETHOME
                    }/${eTransferPagesEnums.SENDETRANSFER}`
                  );
                }}
              />
            }
          />
        )}
        <ItemListing
          principal={"Mom"}
          date={"mymom@gmail.com"}
          details={""}
          separateDetails={true}
          lowercase
        />
        <ItemListing
          principal={"Neighbour Phil"}
          date={"neighbourphil@gmail.com"}
          details={""}
          separateDetails={true}
          lowercase
        />
        <ItemListing
          principal={"Piano Teacher"}
          date={"pianoteacher@gmail.com"}
          details={""}
          separateDetails={true}
          lowercase
        />
      </BillPaymentsContainer>
    </BankingContainer>
  );
};

export default Contacts;

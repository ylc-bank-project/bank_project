import React from "react";
import {
  BankingContainer,
  BillPaymentsContainer,
  ItemListing,
  TransactionSubtitle,
} from "../BankPageElements";
import plus from "../../assets/plus.png";
import styled from "styled-components";
import { InfoTip } from "../../Shared/Tip";

const AddContactContainer = styled.div`
  width: calc(100% - 60px);
  height: 50px;
  margin: 0 30px;
  display: flex;
  align-items: center;
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
  ${(p) => p.theme.fonts.body_text_bold}/* font-weight: normal; */
`;

const AddContact = () => {
  return (
    <AddContactContainer>
      <InfoTip
        tipContent={<div>Choose "Add A New Contact".</div>}
        tipTarget={
          <PlusContainer>
            <img src={plus} alt="" />
          </PlusContainer>
        }
      />
      <AddContactText>Add A New Contact</AddContactText>
    </AddContactContainer>
  );
};

const Contacts = () => {
  return (
    <BankingContainer>
      <BillPaymentsContainer>
        <TransactionSubtitle>Select A Contact</TransactionSubtitle>
        <AddContact />
        <ItemListing
          principal={"Piano Teacher"}
          date={"pianoteacher@gmail.com"}
          details={""}
          separateDetails={true}
          lowercase
        />
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
      </BillPaymentsContainer>
    </BankingContainer>
  );
};

export default Contacts;

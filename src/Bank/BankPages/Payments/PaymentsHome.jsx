import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { BankingContainer } from "../BankPageElements";

const BillPaymentsContainer = styled.div`
  min-height: calc(100vh - 150px);
  background: white;
  padding-bottom: 150px;
`;

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const PaymentsHome = () => {
  const [accountType, setAccountType] = useState(undefined);
  const [billAmount, setBillAmount] = useState(undefined);
  const [billDate, setBillDate] = useState(addDays(new Date(), 5));
  return (
    <BankingContainer>
      <BillPaymentsContainer>
        <Outlet
          context={{
            accountType,
            setAccountType,
            billAmount,
            setBillAmount,
            billDate,
            setBillDate,
          }}
        />
      </BillPaymentsContainer>
    </BankingContainer>
  );
};

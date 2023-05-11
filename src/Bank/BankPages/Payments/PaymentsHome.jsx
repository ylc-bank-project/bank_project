import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// import styled from "styled-components";
import { BankingContainer, BillPaymentsContainer } from "../BankPageElements";

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

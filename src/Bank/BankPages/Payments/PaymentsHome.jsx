import React from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

const BillPaymentsContainer = styled.div`
  min-height: calc(100vh - 150px);
  background: white;
  padding-bottom: 150px;
`;

export const PaymentsHome = () => {
  return (
    <BillPaymentsContainer>
      <Outlet />
    </BillPaymentsContainer>
  );
};

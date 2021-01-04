import React from "react";
import logo from "../assets/dark_flake.png";
import styled from "styled-components";

const Logo = styled.img`
  height: 150vh;
  position: absolute;
  top: -50vh;
  right: calc(50% - 75vh);
  overflow: hidden;
  opacity: 0.5;
  z-index: -1;
`;

const BankingBackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const BankingColor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(p) => p.theme.colors.bank_blue};
  /* opacity: 0.8; */
  z-index: -1;
  overflow: hidden;
`;

export const BankingBackground = ({ children }) => {
  return (
    <BankingBackgroundContainer>
      {children}
      <BankingColor />
      <Logo src={logo} />
    </BankingBackgroundContainer>
  );
};

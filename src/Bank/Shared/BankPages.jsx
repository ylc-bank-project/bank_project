import React from "react";
import logo from "../assets/dark_flake.png";
import blackLogo from "../assets/dark_flake_black.png";
import styled, { css } from "styled-components";
import { MarginedContainer } from "./Layout";

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

const BankLogoDiv = styled.div`
  grid-column: span 12;
  ${(p) => p.theme.fonts.extra_small_header};
  display: flex;
  justify-content: ${(p) => (p.left ? "flex-start" : "center")};
  align-items: center;
  color: white;
  padding: 40px 0;
  padding-bottom: ${(p) => (p.left ? "15px" : "40px")};
  ${(p) => console.log({ p })};
`;

const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  padding-left: 5px;
`;

const HeaderWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 11;
  padding: 20px 0;
`;

export const BankingLogo = ({ left, NewStyle }) => (
  <BankLogoDiv left={left}>
    <span>Bank of YLC</span>
    <LogoImg src={blackLogo} />
  </BankLogoDiv>
);

const TagContainer = styled.div`
  grid-column: span 12;
  color: white;
`;

export const BankingTag = () => (
  <TagContainer>Let us help you with your banking!</TagContainer>
);

const ColoredDiv = styled.div`
  height: 30px;
  background-color: ${(p) => p.theme.colors.ylc_blue};
  opacity: 0.7;
  margin: 20px 0 0;
`;

export const BankingHeader = () => {
  return (
    <>
      <MarginedContainer>
        <HeaderWrapper>
          <BankingLogo left={true} />
          <BankingTag />
        </HeaderWrapper>
      </MarginedContainer>
      <ColoredDiv />
    </>
  );
};

export const SignInContainer = styled.div`
  background: white;
  grid-column-start: 4;
  grid-column-end: 10;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
`;

export const CleanBackground = styled.div`
  /* background: ${(p) => p.theme.colors.light_accent}; */
  background: rgb(242, 242, 242);
  height: 100%;
  /* padding-top: 15px; */
`;

export const BankingContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 100%;
`;

const StyledBankingFooter = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  height: 75px;
`;

const FooterLink = styled.div`
  width: 130px;
  margin: 10px;
  border-bottom: 4px solid
    ${(p) => (p.isActive ? p.theme.colors.ylc_blue : "transparent")};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  ${(p) => p.theme.fonts.body_text};
  font-size: 18px;
  cursor: pointer;
`;

export const BankingFooter = ({ isActive = "home" }) => {
  return (
    <StyledBankingFooter>
      <FooterLink isActive={isActive === "home"}>Home</FooterLink>
      <FooterLink isActive={isActive === "pay"}>Pay & Transfer</FooterLink>
      <FooterLink isActive={isActive === "more"}>More</FooterLink>
    </StyledBankingFooter>
  );
};

const TransContainer = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: ${(p) => p.theme.colors.medium_accent}; */
  background: white;
`;

const TransItem = styled.div``;

export const TransactionsDetails = () => {
  return (
    <div>
      <MarginedContainer>
        <TransContainer>
          <TransItem>Transactions</TransItem>
          <TransItem>Account Details</TransItem>
        </TransContainer>
      </MarginedContainer>
    </div>
  );
};

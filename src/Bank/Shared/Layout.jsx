// import React from "react";
import styled from "styled-components";
import { bps } from "../Global";

export const PageContainer = styled.div``;

export const MarginedContainer = styled.div`
  max-width: ${bps[3]}px;
  margin: 0 auto;
  /* padding: 0 10px; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

export const ActButton = styled.button`
  background: ${(p) => (p.disabled ? "grey" : p.theme.colors.ylc_blue)};
  color: white;
  min-width: 70px;
  min-height: 40px;
  border-radius: 5px;
  ${(p) => p.theme.fonts.body_text_bold}
  cursor: pointer;
`;

export const AllActivitiesButton = styled(ActButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10000000;
  padding: 5px 10px;
  min-height: 30px;
  border-radius: 50px;
`;

export const SignInButton = styled.button`
  background-color: ${(p) => p.background || "white"};
  color: ${(p) => p.color || p.theme.colors.ylc_blue};
  width: 240px;
  height: 80px;
  border-radius: 100px;
  ${(p) => p.theme.fonts.small_header}
  cursor: pointer;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 20px 0 0 0;
  text-align: center;
`;

export const NeutralBankingButton = styled.button`
  background-color: ${(p) => p.background || "white"};
  color: ${(p) => p.color || p.theme.colors.ylc_blue};
  width: 100px;
  height: 40px;
  border-radius: 100px;
  ${(p) => p.theme.fonts.body_text_bold}
  cursor: pointer;
`;

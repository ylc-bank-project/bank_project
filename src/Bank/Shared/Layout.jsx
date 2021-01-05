import React from "react";
import styled, { css } from "styled-components";
import { bps } from "../Global";

export const PageContainer = styled.div``;

export const MarginedContainer = styled.div`
  max-width: ${bps[3]}px;
  margin: 0 auto;
  padding: 0 10px;
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

export const SignInButton = styled.button`
  background-color: ${(p) => p.background || "white"};
  color: ${(p) => p.color || p.theme.colors.ylc_blue};
  width: 240px;
  height: 80px;
  border-radius: 100px;
  ${(p) => p.theme.fonts.small_header}
  cursor: pointer;
`;

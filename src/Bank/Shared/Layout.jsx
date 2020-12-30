import React from "react";
import styled, { css } from "styled-components";
import { bps } from "../Global";

export const PageContainer = styled.div``;

export const MarginedContainer = styled.div`
  max-width: ${bps[3]}px;
  margin: 0 auto;
`;

export const ActButton = styled.button`
  background: ${(p) => p.theme.colors.ylc_blue};
  color: white;
  min-width: 70px;
  min-height: 40px;
  border-radius: 5px;
  ${(p) => p.theme.fonts.body_text_bold}
`;

import styled from "styled-components";
import { mq } from "../Global";

export const BankingButton = styled.button`
  width: 200px;
  height: 200px;
  cursor: pointer;
  ${(p) => p.theme.fonts.extra_small_header};
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 50px;
    padding-bottom: 5px;
  }

  ${mq[1]} {
    width: 150px;
    height: 150px;
    font-size: 14px;
  }
`;

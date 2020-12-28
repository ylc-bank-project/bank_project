import { css } from "styled-components";
import facepaint from "facepaint";

export const bps = ["400", "600", "800", "1060"];

export const mq = bps.map((bp) => `@media (max-width: ${bp}px)`);
export const mqMin = bps.map((bp) => `@media (min-width: ${bp}px)`);

export const mqO = facepaint([
  `@media(max-width: ${bps[3]}px)`,
  `@media(max-width: ${bps[2]}px)`,
  `@media(max-width: ${bps[1]}px)`,
  `@media(max-width: ${bps[0]}px)`,
]);

export const mqNew = (bp) => `@media (max-width: ${bp}px)`;

export const theme = {
  colors: {
    ylc_blue: "#2F3575",
    text: "#02111B",
    light_accent: "#EBF2FA",
    medium_accent: "#B4CDED",
    lighter_grey: "#FDFDFD",
    medium_grey: "#EFEFEF",
    faded_text: "#B3B7BA",
  },
  zIndex: {
    first: 10,
    second: 20,
    third: 30,
    fourth: 40,
    top: 50,
  },
  fonts: {
    big_header: css`
      font-family: Poppins;
      font-weight: bolder;
      ${mqO({
        fontSize: ["75px", null, "60px", "40px", null],
      })}
    `,
    medium_header: css`
      font-family: Poppins;
      font-weight: bold;
      ${mqO({
        fontSize: ["36px", null, null, "25px", null],
      })}
    `,
    small_header: css`
      font-size: 24px;
      font-family: Poppins;
      font-weight: bold;
    `,
    extra_small_header: css`
      font-size: 20px;
      font-family: Poppins;
      font-weight: bold;
    `,
    body_text: css`
      font-size: 16px;
      font-family: Noto Sans;
      ${mq[2]} {
        font-size: 14px;
      }
    `,
    body_text_bold: css`
      font-size: 16px;
      font-family: Noto Sans;
      font-weight: bold;
      ${mq[2]} {
        font-size: 14px;
      }
    `,
    small_body_text: css`
      font-size: 12px;
      font-family: Noto Sans;
      ${mq[2]} {
        font-size: 10px;
      }
    `,
    large_button_text: css`
      font-size: 14px;
      font-family: Poppins;
      font-weight: bold;
    `,
    small_button_text: css`
      font-size: 12px;
      font-family: Poppins;
      font-weight: bold;
    `,
  },
};

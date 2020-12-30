import React from "react";
import { ModalOverlay, ResponsiveContent } from "../Modal";
import styled from "styled-components";
import { ActivityList } from "./ActivityListing";
import logo from "../assets/dark_flake.png";

const ActChooserBody = styled.div`
  padding-top: 160px;
  background: ${(p) => p.theme.colors.light_accent};
  height: 100%;
  padding-bottom: 20px;
`;

const Welcome = styled.div`
  ${(p) => p.theme.fonts.small_header};
  display: flex;
  justify-content: center;
`;

const Intro = styled.div`
  ${(p) => p.theme.fonts.body_text_bold}
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const IntroContent = styled.div`
  max-width: 400px;
  text-align: center;
`;

const BlueSpan = styled.span`
  color: ${(p) => p.theme.colors.ylc_blue};
  display: inline-block;
`;

const Choose = styled.div`
  ${(p) => p.theme.fonts.medium_header}
  display: flex;
  justify-content: center;
  padding: 30px 0 20px;
`;

const HeaderLogo = styled.img`
  height: 300px;
  position: absolute;
  top: -150px;
  right: calc(50% - 150px);
  overflow: hidden;
`;

const ActivityChooser = ({ visible, closeModal, setCurrentActivity }) => {
  const ActivityHeader = () => (
    <div>
      <HeaderLogo src={logo} alt="" />
      <Welcome>
        Welcome to the&nbsp;<BlueSpan>YLC Online Banking Simulator</BlueSpan>.
      </Welcome>
      <Intro>
        <IntroContent>
          Banking is challenging and here are some nice introductory words.
          Banking is challenging and here are some nice introductory words.
        </IntroContent>
      </Intro>
      <Choose>Choose an exercise</Choose>
    </div>
  );

  return (
    <ModalOverlay
      visible={visible}
      closeModal={closeModal}
      notOverlayCloseable={true}
      render={() => (
        <ResponsiveContent>
          <ActChooserBody>
            <ActivityHeader />
            <ActivityList {...{ closeModal, setCurrentActivity }} />
          </ActChooserBody>
        </ResponsiveContent>
      )}
    />
  );
};

export default ActivityChooser;

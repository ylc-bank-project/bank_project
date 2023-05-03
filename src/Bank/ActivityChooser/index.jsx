import React from "react";
import { ModalOverlay, ResponsiveContent } from "../Modal";
import styled from "styled-components";
import { ActivityList } from "./ActivityListing";
import logo from "../assets/dark_flake.png";
// import { Space, BoldDiv } from "../Shared/BankPages";
import { mq, mqMin } from "../Global";

const LargerSpace = styled.span`
  width: 30px;
  display: inline-block;
`;

const ActChooserBody = styled.div`
  /* position: relative; */
  /* top: -160px; */
  background: ${(p) => p.theme.colors.light_accent};
  height: 100%;
  padding-bottom: 20px;
`;

const Welcome = styled.div`
  ${(p) => p.theme.fonts.small_header};
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    flex-direction: column;
  }
`;

const Intro = styled.div`
  ${(p) => p.theme.fonts.body_text_bold}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px 0;
`;

const IntroContent = styled.div`
  max-width: 550px;
  padding: 10px 5px;
  font-weight: normal;
  /* text-align: center; */
`;

const BlueSpan = styled.span`
  color: ${(p) => p.theme.colors.ylc_blue};
  display: inline-block;
`;

const Choose = styled.div`
  ${(p) => p.theme.fonts.medium_header}
  display: flex;
  justify-content: center;
  padding: 15px 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
`;

const HeaderLogo = styled.img`
  height: 300px;
  position: relative;
  top: -150px;
  overflow: hidden;
`;

const ActivityChooser = ({ visible, closeModal }) => {
  const ActivityHeader = () => (
    <div>
      <LogoContainer>
        <HeaderLogo src={logo} alt="" />
      </LogoContainer>
      <Welcome>
        <span>Welcome to the&nbsp;</span>
        <BlueSpan>YLC Online Banking Simulator</BlueSpan>
      </Welcome>
      <Intro>
        <IntroContent>
          <LargerSpace />
          The online banking simulator gives people everywhere the opportunity
          to gain the confidence needed to start banking online. The activities
          guide users through the step-by-step process to help them build
          familiarity with online banking features. It is intended to show users
          how to navigate some of the most common banking tasks. The appearance
          and navigation will differ from bank to bank but most online banking
          scenarios will allow you to complete these tasks in a similar manner.
        </IntroContent>
        <IntroContent>
          <LargerSpace />
          To use the online banking simulator, scroll down and choose an
          activity by selecting "start". You will then be prompted with a white
          box with an orange border with instructions on how to interact with
          the site. You do not need an account and you do not need to share
          personal information.
        </IntroContent>
      </Intro>
      <Choose>Choose an Activity</Choose>
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
            <ActivityList {...{ closeModal }} />
          </ActChooserBody>
        </ResponsiveContent>
      )}
    />
  );
};

export default ActivityChooser;

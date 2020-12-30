import React from "react";
import { ModalOverlay, ResponsiveContent } from "../Modal";
import styled from "styled-components";
import { ActivityList } from "./ActivityListing";
import logo from "../assets/dark_flake.png";

const ActChooserBody = styled.div`
  padding-top: 160px;
  background: ${(p) => p.theme.colors.light_accent};
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
`;

const BlueSpan = styled.span`
  color: ${(p) => p.theme.colors.ylc_blue};
`;

const Choose = styled.div`
  ${(p) => p.theme.fonts.medium_header}
  display: flex;
  justify-content: center;
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
        Welcome to the <BlueSpan>YLC Online Banking Simulator</BlueSpan>.
      </Welcome>
      <Intro>
        Banking is challenging and here are some nice introductory words.
        Another test of things.
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

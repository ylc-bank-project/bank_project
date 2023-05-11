import React, { useContext } from "react";
import { ModalOverlay, ResponsiveContent } from "../Modal";
import styled from "styled-components";
import introOutroCopy from "../introOutroCopy";
import logo from "../assets/dark_flake.png";
import { ActButton } from "../Shared/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { /* ActivityModalContext */ IntroModalContext } from "../context";

// const LargerSpace = styled.span`
//   width: 30px;
//   display: inline-block;
// `;

const HeaderLogo = styled.img`
  height: 300px;
  position: absolute;
  top: -150px;
  right: calc(50% - 150px);
  overflow: hidden;
`;

const IntroOutroContainer = styled.div`
  padding: 30px 0 20px;
  padding-top: 150px;
`;

const TextSection = styled.div`
  padding: 10px 50px;
  ${(p) => p.theme.fonts.body_text_bold}
`;

const ButtonSection = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const IntroOutro = ({ copy }) => {
  // let { isVisible, setActivityContext } = useContext(ActivityModalContext);
  let { introModalState, setIntroContext } = useContext(IntroModalContext);
  let { activity } = useParams();
  const navigate = useNavigate();

  const visible = introModalState.isVisible;
  const isIntro = introModalState.isIntro;

  const closeModal = () => {
    setIntroContext({
      isVisible: false,
      isIntro: introModalState.isIntro,
    });
  };

  const text =
    copy ||
    introOutroCopy?.[activity]?.[isIntro ? "intro" : "outro"] ||
    "copy not available";
  return (
    <ModalOverlay
      visible={visible}
      closeModal={closeModal}
      notOverlayCloseable={true}
      zIndex={110}
      render={() => (
        <ResponsiveContent>
          <IntroOutroContainer>
            <HeaderLogo src={logo} />
            <TextSection>{text}</TextSection>
            <TextSection>
              {
                "No personal information will be required in these exercises. The information used is not a real bank account, it is an example for learning purposes."
              }
            </TextSection>
            <ButtonSection>
              {isIntro ? (
                <ActButton onClick={() => closeModal()}>Continue</ActButton>
              ) : (
                <ActButton
                  onClick={() => {
                    setIntroContext({ isVisible: false, isIntro: true });
                    navigate("/");
                  }}
                >
                  Start A New Activity
                </ActButton>
              )}
            </ButtonSection>
          </IntroOutroContainer>
        </ResponsiveContent>
      )}
    />
  );
};

export default IntroOutro;

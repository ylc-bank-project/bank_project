import React, { useContext } from "react";
import styled from "styled-components";
import { activitiesEnums } from "../enums";
import { ActButton as ActButtonImport } from "../Shared/Layout";
import { mq } from "../Global";
import { useNavigate } from "react-router-dom";
import { bankPageEnums } from "../enums";
import { IntroModalContext } from "../context";

const ActSectionHeader = styled.h2`
  ${(p) => p.theme.fonts.small_header}
  padding: 20px 0 20px 90px;
  background: ${(p) => p.theme.colors.light_accent};
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const ActWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 90px;
  padding-right: 90px;
  height: 70px;
  ${mq[1]} {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ActTitle = styled.span`
  font-size: 18px;
  ${mq[1]} {
    font-size: 16px;
  }
`;

// url: activityName/step/bankPage/../..

const ActButton = ({ activity, children, closeModal }) => {
  const { introModalState, setIntroContext } = useContext(IntroModalContext);
  const navigate = useNavigate();

  return (
    <ActButtonImport
      onClick={() => {
        setIntroContext({
          isVisible: true,
          isIntro: introModalState.isIntro,
        });
        switch (activity) {
          case activitiesEnums.CREATINGACCOUNT:
            navigate(`/${activity}/0/${bankPageEnums.BANKHOMEPAGE}`);
            break;

          case activitiesEnums.SIGNIN:
            navigate(`/${activity}/0/${bankPageEnums.BANKHOMEPAGE}`);
            break;

          default:
            navigate(`/`);
            break;
        }
        closeModal();
      }}
    >
      {children}
    </ActButtonImport>
  );
};

const Activity = ({ closeModal, activity, title }) => (
  <ActWrapper>
    <ActTitle>{title}</ActTitle>
    <ActButton {...{ closeModal, activity }}>Start</ActButton>
  </ActWrapper>
);

export const ActivityList = ({ closeModal }) => {
  return (
    <>
      <ActSectionHeader>Accessing Your Account</ActSectionHeader>
      <Activity
        title={"Creating an account"}
        activity={activitiesEnums.CREATINGACCOUNT}
        {...{ closeModal }}
      />
      <Activity
        title={"Signing in"}
        activity={activitiesEnums.SIGNIN}
        {...{ closeModal }}
      />
      <ActSectionHeader>Account Details</ActSectionHeader>
      <Activity
        title={"Online account overview"}
        activity={activitiesEnums.ACCOUNTOVERVIEW}
        {...{ closeModal }}
      />
      <ActSectionHeader>Making Payments</ActSectionHeader>
      <Activity
        title={"Pay a new company for the first time"}
        activity={activitiesEnums.MAKINGPAYMENTS}
        {...{ closeModal }}
      />
      <ActSectionHeader>Transferring Funds</ActSectionHeader>
      <Activity
        title={"Transfer funds between accounts"}
        activity={activitiesEnums.TRANSFERFUNDS}
        {...{ closeModal }}
      />
      <Activity
        title={"Send an e-transfer to someone"}
        activity={activitiesEnums.ETRANSFER}
        {...{ closeModal }}
      />
    </>
  );
};

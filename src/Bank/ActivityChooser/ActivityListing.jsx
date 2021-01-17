import React from "react";
import styled from "styled-components";
import { activitiesEnums } from "../enums";
import { ActButton as ActButtonImport } from "../Shared/Layout";

const ActSectionHeader = styled.h2`
  ${(p) => p.theme.fonts.small_header}
  padding: 20px 0 20px 90px;
`;

const ActWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 90px;
  padding-right: 90px;
  height: 70px;
`;

const ActTitle = styled.span`
  font-size: 18px;
`;

const ActButton = ({ activity, children, closeModal, setCurrentActivity }) => (
  <ActButtonImport
    onClick={() => {
      setCurrentActivity(activity);
      closeModal();
    }}
  >
    {children}
  </ActButtonImport>
);

const Activity = ({ closeModal, setCurrentActivity, activity, title }) => (
  <ActWrapper>
    <ActTitle>{title}</ActTitle>
    <ActButton {...{ closeModal, setCurrentActivity, activity }}>
      Start
    </ActButton>
  </ActWrapper>
);

export const ActivityList = ({ closeModal, setCurrentActivity }) => {
  return (
    <>
      <ActSectionHeader>Accessing Your Account</ActSectionHeader>
      <Activity
        title={"Signing In"}
        activity={activitiesEnums.SIGNIN}
        {...{ closeModal, setCurrentActivity }}
      />
      <ActSectionHeader>Accounts</ActSectionHeader>
      <Activity
        title={"Online Account Overview"}
        activity={activitiesEnums.ACCOUNTOVERVIEW}
        {...{ closeModal, setCurrentActivity }}
      />
      <ActSectionHeader>Making Payments</ActSectionHeader>
      <Activity
        title={"Pay a new company for the first time"}
        activity={activitiesEnums.MAKINGPAYMENTS}
        {...{ closeModal, setCurrentActivity }}
      />
    </>
  );
};

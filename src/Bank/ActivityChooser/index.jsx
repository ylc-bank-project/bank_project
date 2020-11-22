import React from "react";
import { ModalOverlay, ResponsiveContent } from "../Modal";
import styled from "styled-components";

import { activitiesEnums } from "../enums";

import { color1 } from "../Global";

const ActivityChooser = ({ visible, closeModal, setCurrentActivity }) => {
  const ActivityHeader = () => (
    <div>
      <div>Choose an exercise</div>
      <div>
        Welcome to the YLC Online Banking Simulator. Banking is challenging and
        here are some nice introductory words. Another test of things.
      </div>
    </div>
  );

  const ActivityList = () => {
    const ActSectionHeader = styled.h2`
      font-size: 20px;
    `;

    const ActWrapper = styled.div`
      background: grey;
    `;

    const ActTitle = styled.div`
      font-size: 18px;
    `;

    const ActButtonStyled = styled.button`
      background: ${color1};
    `;

    const ActButton = ({ activity, children }) => (
      <ActButtonStyled onClick={() => setCurrentActivity(activity)}>
        {children}
      </ActButtonStyled>
    );

    return (
      <>
        <ActSectionHeader>Accessing Your Account</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Signing In</ActTitle>
          <ActButton activity={activitiesEnums.SIGNIN}>Start</ActButton>
        </ActWrapper>
        <ActSectionHeader>Accounts</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Online Account Overview</ActTitle>
          <ActButton activity={activitiesEnums.ACCOUNTOVERVIEW}>
            Start
          </ActButton>
        </ActWrapper>
        <ActSectionHeader>Making Payments</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Pay a new company for the first time</ActTitle>
          <ActButton activity={activitiesEnums.MAKINGPAYMENTS}>Start</ActButton>
        </ActWrapper>
      </>
    );
  };

  return (
    <ModalOverlay
      visible={visible}
      closeModal={closeModal}
      render={() => (
        <ResponsiveContent>
          <ActivityHeader />
          <ActivityList />
        </ResponsiveContent>
      )}
    />
  );
};

export default ActivityChooser;

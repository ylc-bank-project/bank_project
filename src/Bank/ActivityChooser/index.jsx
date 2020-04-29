import React from 'react'
import { ModalOverlay, ResponsiveContent } from '../Modal'
import styled from 'styled-components'

import { color1 } from '../Global'

const ActivityChooser = ({ visible, closeModal }) => {

  const ActivityHeader = () => (
    <div>
      <div>Choose an exercise</div>
      <div>Welcome to the YLC Online Banking Simulator. Banking is challenging and here are some nice introductory words.</div>
    </div>
  )

  const ActivityList = () => {
    const ActSectionHeader = styled.h2`
      font-size: 20px;
    `

    const ActWrapper = styled.div`
      background: grey;
    `

    const ActTitle = styled.div`
      font-size: 18px;
    `

    const ActButton = styled.button`
      background: ${color1};
    `

    return (
      <>
        <ActSectionHeader>Accessing Your Account</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Signing In</ActTitle>
          <ActButton>Start</ActButton>
        </ActWrapper>
        <ActSectionHeader>Accounts</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Online Account Overview</ActTitle>
          <ActButton>Start</ActButton>
        </ActWrapper>
        <ActSectionHeader>Making Payments</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Pay a new company for the first time</ActTitle>
          <ActButton>Start</ActButton>
        </ActWrapper>
      </>
    )
  }

  return (
    <ModalOverlay visible={visible} closeModal={closeModal} render={() => (
      <ResponsiveContent>
        <ActivityHeader />
        <ActivityList />
      </ResponsiveContent>
    )}
    />
  )
}

export default ActivityChooser;
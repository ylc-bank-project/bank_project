import React from 'react'
import { ModalOverlay, ResponsiveContent } from '../Modal'
import styled from 'styled-components'

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
      
    `

    return (
      <>
        <ActSectionHeader>Accessing Your Account</ActSectionHeader>
        <ActWrapper>
          <ActTitle>Signing In</ActTitle>
          <button>Start</button>
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
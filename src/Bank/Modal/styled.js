import styled, { css } from 'styled-components'
import { mq_tablet } from '../Global'

export const StyledModalOverlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: -1;
`
export const ModalWrapper = styled.div`
height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  display: ${props => props.visible ? "flex" : "none"};
  justify-content: center;
  align-items: center;
`

const fullScreen = css`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background: white;
  display: flex;
  flex-direction: column;
`

const floating = css`
  width: calc(100% - 10rem);
  max-width: 64rem;
  height: calc(100% - 10rem);
  max-height: 71rem;
  position: relative;
  overflow-y: hidden;
  background: white;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  ${fullScreen}
  @media (min-width: ${mq_tablet}) {
    ${floating}
  }
`
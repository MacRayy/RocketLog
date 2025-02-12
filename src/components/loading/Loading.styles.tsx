import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`

const Spinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #383636;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const LoadingSpinner = () => (
  <SpinnerWrapper data-testid="loading-spinner">
    <Spinner />
  </SpinnerWrapper>
)

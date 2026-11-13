import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  flex: 1; 
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 50vh;
`

export const Loader = styled.div`
  border: 4px solid #EAEEF6;
  border-top: 4px solid #565EEF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`
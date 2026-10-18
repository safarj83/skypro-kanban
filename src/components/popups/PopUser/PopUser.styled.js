import styled from 'styled-components'

export const PopUserWrapper = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`

export const PopUserName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`

export const PopUserMail = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type=checkbox] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.background};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type=checkbox]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    transition: 0.5s;
  }

  input:checked[type=checkbox]::before {
    left: 12px;
  }
`

export const PopUserBtn = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`
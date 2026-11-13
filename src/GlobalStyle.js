import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  *:before,
  *:after {
      box-sizing: border-box;
  }

  a,
  a:visited {
      text-decoration: none;
      cursor: pointer;
  }

  button,
  ._btn {
      cursor: pointer;
      outline: none;
      font-family: inherit;
  }

  ul li {
      list-style: none;
  }

  html,
  body {
      width: 100%;
      height: 100%;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
  }

  .container {
      max-width: 1260px;
      width: 100%;
      margin: 0 auto;
      padding: 0 30px;
  }

  ._hover01:hover { background-color: #33399b; color: #fff; }
  
  ._hover03:hover { 
    background-color: ${({ theme }) => theme.colors.outlinedBtnBorder}; 
    color: ${({ theme }) => theme.colors.surface}; 
  }
  ._hover03:hover a { 
    color: ${({ theme }) => theme.colors.surface}; 
  }

  ._hide { display: none; }
  ._dark { display: none; }

  ._orange { background-color: ${({ theme }) => theme.colors.orangeBg}; color: ${({ theme }) => theme.colors.orangeText}; }
  ._green { background-color: ${({ theme }) => theme.colors.greenBg}; color: ${({ theme }) => theme.colors.greenText}; }
  ._purple { background-color: ${({ theme }) => theme.colors.purpleBg}; color: ${({ theme }) => theme.colors.purpleText}; }
  ._gray { background-color: ${({ theme }) => theme.colors.grayBg}; color: ${({ theme }) => theme.colors.grayText}; }

  ._btn-bor { 
    border-radius: 4px; 
    border: 0.7px solid ${({ theme }) => theme.colors.outlinedBtnBorder}; 
    background: transparent; 
    color: ${({ theme }) => theme.colors.outlinedBtnText}; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  ._btn-bg { 
    border-radius: 4px; 
    background: #565EEF; 
    border: none; 
    color: #FFFFFF; 
  }

  .pop-exit, .pop-new-card, .pop-browse {
      display: block; 
      width: 100%;
      height: 100%;
      min-width: 320px;
      min-height: 100vh;
      position: fixed; 
      top: 0;
      left: 0;
      z-index: 10; 
  }
  
  .pop-exit { z-index: 11; }
  .pop-new-card { z-index: 12; }
  .pop-browse { z-index: 13; min-width: 375px; }

  .pop-exit__container, .pop-new-card__container, .pop-browse__container {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
  }

  .pop-exit__block { 
    display: block; 
    margin: 0 auto; 
    background-color: ${({ theme }) => theme.colors.surface}; 
    max-width: 370px; 
    width: 100%; 
    padding: 50px 40px; 
    border-radius: 10px; 
    border: 0.7px solid ${({ theme }) => theme.colors.border}; 
  }
  
  .pop-exit__ttl h2 { 
    text-align: center; 
    font-size: 20px; 
    margin-bottom: 20px; 
    color: ${({ theme }) => theme.colors.text}; 
  }
  
  .pop-exit__form-group { 
    width: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 10px; 
  }

  .pop-exit__exit-yes { 
    flex: 1; 
    height: 30px; 
    background-color: #565EEF; 
    border-radius: 4px; 
    border: none; 
    color: #FFFFFF; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }
  
  .pop-exit__exit-no { 
    flex: 1; 
    height: 30px; 
    background-color: transparent; 
    border-radius: 4px; 
    border: 0.7px solid #565EEF; 
    color: #565EEF; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }

  .pop-new-card__block { display: block; margin: 0 auto; background-color: ${({ theme }) => theme.colors.surface}; max-width: 630px; width: 100%; padding: 40px 30px 48px; border-radius: 10px; border: 0.7px solid ${({ theme }) => theme.colors.border}; position: relative; }
  .pop-new-card__content { display: block; text-align: left; color: ${({ theme }) => theme.colors.text}; }
  .pop-new-card__ttl { color: ${({ theme }) => theme.colors.text}; font-size: 20px; margin-bottom: 20px; }
  .pop-new-card__close { position: absolute; top: 20px; right: 30px; color: ${({ theme }) => theme.colors.textSecondary}; }
  .pop-new-card__wrap { display: flex; align-items: flex-start; justify-content: space-between; }
  .pop-new-card__form { max-width: 370px; width: 100%; display: block; margin-bottom: 20px; }
  
  .form-new__block { display: flex; flex-direction: column; }
  
  .form-new__input, .form-new__area { 
    width: 100%; 
    outline: none; 
    padding: 14px; 
    background: transparent; 
    border: 0.7px solid ${({ theme }) => theme.colors.border}; 
    border-radius: 8px; 
    font-size: 14px; 
    color: ${({ theme }) => theme.colors.text}; 
    font-family: inherit; 
  }
  
  .form-new__input::placeholder, .form-new__area::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #94A6BE; 
  }

  .form-new__input { margin: 20px 0; }
  .form-new__area { max-width: 370px; margin-top: 14px; height: 200px; resize: none; }
  .form-new__create { width: 132px; height: 30px; background-color: #565EEF; border-radius: 4px; border: 0; color: #FFFFFF; float: right; display: flex; align-items: center; justify-content: center; }

  .pop-browse__block { display: block; margin: 0 auto; background-color: ${({ theme }) => theme.colors.surface}; max-width: 630px; width: 100%; padding: 40px 30px 38px; border-radius: 10px; border: 0.7px solid ${({ theme }) => theme.colors.border}; position: relative; }
  .pop-browse__content { display: block; text-align: left; color: ${({ theme }) => theme.colors.text}; }
  .pop-browse__top-block { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
  .pop-browse__ttl { color: ${({ theme }) => theme.colors.text}; font-size: 20px; }
  .pop-browse__wrap { display: flex; align-items: flex-start; justify-content: space-between; }
  .pop-browse__form { max-width: 370px; width: 100%; display: block; margin-bottom: 10px; }
  
  .pop-browse__btn-browse { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    margin-top: 10px;
  }
  .pop-browse__btn-browse .btn-group {
    display: flex;
    gap: 8px;
  }
  .pop-browse__btn-browse button, .pop-browse__btn-browse a { 
    height: 30px; 
    padding: 0 14px; 
    font-size: 14px;
  }

  .form-browse__block { display: flex; flex-direction: column; }
  .form-browse__area { 
    max-width: 370px; 
    width: 100%; 
    outline: none; 
    padding: 14px; 
    background: ${({ theme }) => theme.colors.background}; 
    border: 0.7px solid ${({ theme }) => theme.colors.border}; 
    border-radius: 8px; 
    font-size: 14px; 
    color: ${({ theme }) => theme.colors.text}; 
    margin-top: 14px; 
    height: 200px; 
  }
  
  .form-browse__area::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #94A6BE; 
  }

  .subttl { color: ${({ theme }) => theme.colors.text}; font-size: 14px; font-weight: 600; line-height: 1; }
  .calendar { width: 182px; margin-bottom: 20px; }
  .calendar__ttl { margin-bottom: 14px; padding: 0 7px; }
  .calendar__p { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 10px; }
  .calendar__p span { color: ${({ theme }) => theme.colors.text}; }
  .calendar__block { display: block; }
  .calendar__month { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 14px; font-weight: 600; }
  .calendar__content { margin-bottom: 12px; }
  .calendar__days-names { display: flex; justify-content: space-between; margin: 7px 0; padding: 0 7px; }
  .calendar__day-name { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 10px; }
  .calendar__cells { width: 182px; height: 126px; display: flex; flex-wrap: wrap; }
  .calendar__cell { width: 22px; height: 22px; margin: 2px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 10px; cursor: pointer; }
  .calendar__nav { display: flex; justify-content: space-between; margin-top: 14px; padding: 0 7px; }
  .calendar__period { padding: 0 7px; }
  .nav__actions { display: flex; justify-content: space-between; }
  .nav__action { width: 18px; height: 25px; display: flex; align-items: center; justify-content: center; }
  .nav__action svg { fill: ${({ theme }) => theme.colors.textSecondary}; }
  ._other-month { opacity: 0; }
  
  ._cell-day:hover { 
    background-color: ${({ theme }) => theme.colors.cellHoverBg}; 
    color: ${({ theme }) => theme.colors.cellHoverText}; 
  }
  
  ._active-day { background-color: ${({ theme }) => theme.colors.textSecondary}; color: ${({ theme }) => theme.colors.surface}; }
  ._current { font-weight: 700; }
  
  .categories__themes { display: flex; flex-wrap: nowrap; align-items: flex-start; justify-content: flex-start; }
  .categories__p { margin-bottom: 14px; }
  .categories__theme { display: inline-block; width: auto; height: 30px; padding: 8px 20px; border-radius: 24px; margin-right: 7px; opacity: 0.4; }
  .categories__theme p { font-size: 14px; font-weight: 600; line-height: 14px; white-space: nowrap; }
  ._active-category { opacity: 1 !important; }
  
  .status { margin-bottom: 11px; }
  .status__p { margin-bottom: 14px; }
  .status__themes { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: flex-start; }
  .status__theme { border-radius: 24px; border: 0.7px solid ${({ theme }) => theme.colors.border}; color: ${({ theme }) => theme.colors.textSecondary}; padding: 11px 14px 10px; margin-right: 7px; margin-bottom: 7px; }
  .status__theme p { font-size: 14px; line-height: 1; }
  
  .status__theme._gray {
    background-color: ${({ theme }) => theme.colors.grayBg};
  }
  .status__theme._gray p {
    color: ${({ theme }) => theme.colors.statusActiveText};
  }

  .header__pop-user-set { display: block; position: absolute; top: 61px; right: 0; width: 213px; height: 205px; border-radius: 10px; border: 0.7px solid ${({ theme }) => theme.colors.border}; background: ${({ theme }) => theme.colors.surface}; padding: 34px; text-align: center; z-index: 2; }
  .pop-user-set__name { color: ${({ theme }) => theme.colors.text}; font-size: 14px; font-weight: 500; margin-bottom: 4px; }
  .pop-user-set__mail { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 14px; margin-bottom: 10px; }
  .pop-user-set__theme { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
  .pop-user-set__theme p { color: ${({ theme }) => theme.colors.text}; font-size: 14px; }
  
  .pop-user-set__theme input[type=checkbox] { position: relative; width: 24px; height: 13px; border-radius: 100px; background: ${({ theme }) => theme.colors.toggleTrackBg}; outline: none; -webkit-appearance: none; appearance: none; }
  .pop-user-set__theme input[type=checkbox]::before { content: ""; position: absolute; top: 1px; left: 1px; width: 11px; height: 11px; border-radius: 50%; background-color: ${({ theme }) => theme.colors.toggleCircle}; transition: 0.5s; }
  .pop-user-set__theme input:checked[type=checkbox]::before { left: 12px; }
  
  .pop-user-set button { width: 72px; height: 30px; background: transparent; color: ${({ theme }) => theme.colors.popUserBtnText}; border-radius: 4px; border: 1px solid ${({ theme }) => theme.colors.popUserBtnBorder}; }
  .pop-user-set button a { color: ${({ theme }) => theme.colors.popUserBtnText}; }

  @media screen and (max-width: 660px) {
      .pop-new-card__container { padding: 0; justify-content: flex-start; }
      .pop-new-card__block { border-radius: 0; }
      .pop-new-card__wrap { display: block; }
      .calendar { max-width: 340px; width: 100%; }
      .calendar__cells { width: 344px; height: auto; justify-content: space-around; }
      .calendar__cell { width: 42px; height: 42px; font-size: 14px; }
      .pop-browse__container { padding: 0; justify-content: flex-start; }
      .pop-browse__block { border-radius: 0; }
      .pop-browse__wrap { display: block; }
  }
  @media screen and (max-width: 495px) {
      .container { padding: 0 16px; }
      .pop-new-card__block { padding: 20px 16px 32px; }
      .pop-new-card__form { max-width: 100%; }
      .form-new__area { height: 34px; }
      .form-new__create { width: 100%; height: 40px; }
      .pop-browse__block { padding: 20px 16px 32px; }
      .pop-browse__form { max-width: 100%; }
      .form-browse__area { max-width: 100%; height: 37px; }
      .pop-browse__btn-browse { flex-direction: column; align-items: stretch; }
      .pop-browse__btn-browse .btn-group { flex-direction: column; }
      .pop-browse__btn-browse button, .pop-browse__btn-browse a { width: 100%; height: 40px; margin-bottom: 10px; }
  }
`
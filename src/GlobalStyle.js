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
  }

  ul li {
      list-style: none;
  }

  html,
  body {
      width: 100%;
      height: 100%;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      color: #000000;
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

  ._hover01:hover { background-color: #33399b; }
  ._hover03:hover { background-color: #33399b; color: #FFFFFF; }
  ._hover03:hover a { color: #FFFFFF; }

  ._hide { display: none; }
  ._dark { display: none; }

  ._orange { background-color: #FFE4C2; color: #FF6D00; }
  ._green { background-color: #B4FDD1; color: #06B16E; }
  ._purple { background-color: #E9D4FF; color: #9A48F1; }
  ._gray { background: #94A6BE; color: #FFFFFF; }

  ._btn-bor { border-radius: 4px; border: 0.7px solid var(--palette-navy-60, #565EEF); outline: none; background: transparent; color: #565EEF; }
  ._btn-bor a { color: #565EEF; }
  
  ._btn-bg { border-radius: 4px; background: #565EEF; border: none; outline: none; color: #FFFFFF; }
  ._btn-bg a { color: #FFFFFF; }
  
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

  .pop-exit__block { display: block; margin: 0 auto; background-color: #FFFFFF; max-width: 370px; width: 100%; padding: 50px 60px; border-radius: 10px; border: 0.7px solid #D4DBE5; box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13); }
  .pop-exit__ttl h2 { text-align: center; font-size: 20px; font-weight: 700; line-height: 30px; letter-spacing: -0.4px; margin-bottom: 20px; }
  .pop-exit__exit-yes { width: 153px; height: 30px; background-color: #565EEF; border-radius: 4px; border: none; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #FFFFFF; margin-right: 10px; }
  .pop-exit__exit-no { width: 153px; height: 30px; background-color: transparent; border-radius: 4px; border: 0.7px solid #565EEF; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #565EEF; }
  .pop-exit__form-group { width: 100%; display: flex; align-items: center; justify-content: space-between; }

  .pop-new-card__block { display: block; margin: 0 auto; background-color: #FFFFFF; max-width: 630px; width: 100%; padding: 40px 30px 48px; border-radius: 10px; border: 0.7px solid #D4DBE5; position: relative; }
  .pop-new-card__content { display: block; text-align: left; }
  .pop-new-card__ttl { color: #000; font-size: 20px; font-weight: 600; line-height: 24px; margin-bottom: 20px; }
  .pop-new-card__close { position: absolute; top: 20px; right: 30px; color: #94A6BE; cursor: pointer; }
  .pop-new-card__wrap { display: flex; align-items: flex-start; justify-content: space-between; }
  .pop-new-card__form { max-width: 370px; width: 100%; display: block; margin-bottom: 20px; }
  .form-new__block { display: flex; flex-direction: column; }
  .form-new__input, .form-new__area { width: 100%; outline: none; padding: 14px; background: transparent; border: 0.7px solid rgba(148, 166, 190, 0.4); border-radius: 8px; font-size: 14px; }
  .form-new__input { margin: 20px 0; }
  .form-new__area { max-width: 370px; margin-top: 14px; height: 200px; }
  .form-new__create { width: 132px; height: 30px; background-color: #565EEF; border-radius: 4px; border: 0; font-size: 14px; color: #FFFFFF; float: right; display: flex; align-items: center; justify-content: center; }

  .pop-browse__block { display: block; margin: 0 auto; background-color: #FFFFFF; max-width: 630px; width: 100%; padding: 40px 30px 38px; border-radius: 10px; border: 0.7px solid #D4DBE5; position: relative; }
  .pop-browse__content { display: block; text-align: left; }
  .pop-browse__top-block { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
  .pop-browse__ttl { color: #000; font-size: 20px; font-weight: 600; line-height: 24px; }
  .pop-browse__wrap { display: flex; align-items: flex-start; justify-content: space-between; }
  .pop-browse__form { max-width: 370px; width: 100%; display: block; margin-bottom: 20px; }
  .pop-browse__btn-browse { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; }
  .pop-browse__btn-browse button, .pop-browse__btn-browse a { height: 30px; margin-bottom: 10px; padding: 0 14px; }
  .pop-browse__btn-browse .btn-group button { margin-right: 8px; }
  
  .form-browse__block { display: flex; flex-direction: column; }
  .form-browse__area { max-width: 370px; width: 100%; outline: none; padding: 14px; background: #EAEEF6; border: 0.7px solid rgba(148, 166, 190, 0.4); border-radius: 8px; font-size: 14px; margin-top: 14px; height: 200px; }

  .subttl { color: #000; font-size: 14px; font-weight: 600; line-height: 1; }
  .calendar { width: 182px; margin-bottom: 20px; }
  .calendar__ttl { margin-bottom: 14px; padding: 0 7px; }
  .calendar__p { color: #94A6BE; font-size: 10px; line-height: 1; }
  .calendar__p span { color: #000000; }
  .calendar__block { display: block; }
  .calendar__month { color: #94A6BE; font-size: 14px; line-height: 25px; font-weight: 600; }
  .calendar__content { margin-bottom: 12px; }
  .calendar__days-names { display: flex; flex-wrap: nowrap; align-items: center; justify-content: space-between; margin: 7px 0; padding: 0 7px; }
  .calendar__day-name { color: #94A6BE; font-size: 10px; font-weight: 500; line-height: normal; letter-spacing: -0.2px; }
  .calendar__cells { width: 182px; height: 126px; display: flex; flex-wrap: wrap; }
  .calendar__cell { width: 22px; height: 22px; margin: 2px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #94A6BE; font-size: 10px; cursor: pointer; }
  .calendar__nav { width: 100%; display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding: 0 7px; }
  .calendar__period { padding: 0 7px; }
  .nav__actions { display: flex; align-items: center; justify-content: space-between; }
  .nav__action { width: 18px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
  .nav__action svg { fill: #94A6BE; }
  ._other-month { opacity: 0; }
  ._cell-day:hover { color: #94A6BE; background-color: #EAEEF6; }
  ._active-day { background-color: #94A6BE; color: #FFFFFF; }
  ._current { font-weight: 700; }
  .categories { margin-bottom: 20px; }
  .categories__themes { display: flex; flex-wrap: nowrap; align-items: flex-start; justify-content: flex-start; }
  .categories__p { margin-bottom: 14px; }
  .categories__theme { display: inline-block; width: auto; height: 30px; padding: 8px 20px; border-radius: 24px; margin-right: 7px; opacity: 0.4; }
  .categories__theme p { font-size: 14px; font-weight: 600; line-height: 14px; white-space: nowrap; }
  ._active-category { opacity: 1 !important; }
  .status { margin-bottom: 11px; }
  .status__p { margin-bottom: 14px; }
  .status__themes { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: flex-start; }
  .status__theme { border-radius: 24px; border: 0.7px solid rgba(148, 166, 190, 0.4); color: #94A6BE; padding: 11px 14px 10px; margin-right: 7px; margin-bottom: 7px; }
  .status__theme p { font-size: 14px; line-height: 1; }
`
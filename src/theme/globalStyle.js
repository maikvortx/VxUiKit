import { createGlobalStyle } from 'styled-components';
import RocknessWoff from './fonts/rockness/399DC5_0_0.woff';
import RocknessTtf from './fonts/rockness/399DC5_0_0.ttf';
import RocknessSvg from './fonts/rockness/399DC5_0_0.svg';
import RocknessEot from './fonts/rockness/399DC5_0_0.eot';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rockness';
    src: url(${RocknessWoff});
    src:
        url(${RocknessEot}) format('embedded-opentype'),
        url(${RocknessWoff}) format('woff'),
        url(${RocknessTtf}) format('truetype'),
        url(${RocknessSvg}) format('svg');
  }
  body {
    color: #343434;
    background-color: #F4F2ED;
    margin: 0;
  }
  h1, h2, h3, h4 {
    font-family: "Josefin Sans", "Times New Roman", serif;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    line-height: 30px;
    font-family: 'Open Sans', sans-serif;
  }
  .manuscrito {
    font-family: 'Rockness', cursive;
  }

  .MuiListItem-button:hover {
    background-color: ##C12C2C33 !important;
  }
  .MuiListItem-root.Mui-selected {
    background-color: #ECB2B1 !important;
  }
  .MuiPaper-elevation2 {
    box-shadow: none !important;
  }

  .MuiInputBase-input{
    border: none !important;
  }
  #detail-painel .MuiTableRow-root:hover {
    box-shadow: none !important;
    cursor: pointer;
  }
  .MTableToolbar-root-33 {
    padding: 0 !important;
  }
  .MuiTypography-h6 {
    font-family: 'Josefin Sans', sans-serif !important;
    font-size: 21px;
    font-weight: 700;
  }
  .MuiTypography-body1 {
    font-size: 14px !important;
    font-family: 'Open Sans', sans-serif !important;
  }
`;

export default GlobalStyle;

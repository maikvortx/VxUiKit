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
`;

export default GlobalStyle;

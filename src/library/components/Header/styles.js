/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderApp = styled.section`
  & .Navbar__ToggleShow .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-5px, 5px);
    width: 30px;
  }

  & .Navbar__ToggleShow .bar2 {
    opacity: 0;
  }

  & .Navbar__ToggleShow .bar3 {
    width: 30px;
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-6px, -7px);
  }

  & .Navbar__ToggleShow > .nav-items {
    background-color: #ffffff;
    color: #343434;
    padding: 50px;
    width: 20%;
  }

  & .Navbar__ToggleShow > .open-nav {
    background-color: rgba(255, 255, 255, 1);
    color: #343434;
    z-index: 90;
    width: 20%;
    height: 100vh;
    position: fixed;
    box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);
    top: 0;
    padding-top: 60px;
  }

  & .Navbar__ToggleShow > .open-nav > .nav-sublinks {
    color: #343434;
    display: block;
    padding: 15px;
    font-weight: 500;
    text-align: center;
    & a {
      text-decoration: none;
      color: #343434;
    }
  }

  & .Navbar__ToggleShow > .open-nav > .nav-sublinks:hover,
  & .Navbar__ToggleShow > .open-nav > .nav-sublinks > a:hover {
    color: #343434;
    font-weight: 700;
    cursor: pointer;
  }
  & .Navbar__ToggleShow > .open-nav > hr {
    margin: 0 50px;
    border-top: 2px solid #8e734a;
    display: block;
  }

  @media only screen and (min-width: 550px) {
    .Navbar__ToggleShow > .close-nav {
      background-color: rgba(255, 255, 255, 1);
      color: #343434;
      z-index: 90;
      width: 80%;
      height: 100vh;
      position: fixed;
      opacity: 0;
      right: 0;
      box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);
      top: 0;
      padding-top: 80px;
    }
  }

  @media only screen and (max-width: 500px) {
    .Navbar__ToggleShow > .open-nav {
      background-color: rgba(255, 255, 255, 1);
      color: #343434;
      z-index: 90;
      width: 50%;
    }
  }

  & .nav-sublinks {
    display: none;
  }

  & hr {
    display: none;
  }

  &.header-carteira {
    display: none;
  }
`;

export const NavBar = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  color: #343434;
  font-size: 13px;
  align-items: center;
  position: absolute;
  z-index: 100;
  width: 100%;
  position: fixed;
  box-shadow: 6px 6px 8px 0px rgba(52, 52, 52, 0.17);
  top: 0;
  justify-content: space-between;
`;
export const NavBarLeftSide = styled.div`
  display: flex;

  & #logo-vortx {
    height: 30px;
    padding: 10px;
  }
`;

export const Menu = styled.div`
  font-size: 25px;
  margin: 12px 0 12px 10px;
  padding-left: 20px;
  border-left: 1px solid #EBEBF2;
  cursor: pointer;
`;
export const Bar = styled.div`
  height: 2px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  width: ${props => props.width};
`;
export const Slogan = styled.p`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0;
  margin-bottom: 0;
  font-family: 'Josefin Sans';
  & span {
    font-size: 25px;
    color: #8e734a;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavBarRightSide = styled.div`
  display: flex;
  max-width: 350px;
  align-items: baseline;
  border-left: 1px solid #EBEBF2;
  padding-left: 20px;
  & a li {
    list-style: none;
  }
`;
export const Login = styled.p`
  padding-right: 10px;
  margin-left: auto;
  font-size: 15px;
`;
export const Logout = styled.a`
  color: #888888;
  font-size: 12px;
  padding-right: 30px;
  padding-top: 2px;
  &:hover {
    color: #cb1e25;
    cursor: pointer;
  }
`;
export const MenuDropDown = styled.nav`
  display: flex;
  list-style-type: none;
`;

import React from 'react';
import { HeaderApp, NavBar, NavBarLeftSide, NavBarRightSide, Login, Logout, Menu, MenuDropDown, Bar, Slogan} from './styles';

function Header(props) {
  const toggleMenu = () => {
    const navbar = document.querySelectorAll('#navbar');
    navbar.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    const navs = document.querySelectorAll('#nav-items');
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));

  };

  const logout = () => {
    alert('Click no logout')
  };

  return (
    <HeaderApp id="header-app">
      <NavBar id="navbar">
        <NavBarLeftSide>
          <a href="#">
            <img
              id="logo-vortx"
              src="https://cdn.vortx.com.br/images/logo-expanded-dourado.svg"
              alt="Logo Vórtx"
              title="Vórtx | Inovação e transparência em serviços fiduciários"
            />
          </a>
          <Menu onClick={toggleMenu}>
            <Bar width="20px" className="bar1"></Bar>
            <Bar width="30px" className="bar2"></Bar>
            <Bar width="15px" className="bar3"></Bar>
          </Menu>
        </NavBarLeftSide>
        <div>
          <Slogan>
            Tech Based. <span className="manuscrito">Dream</span> Powered.
          </Slogan>
        </div>
        <NavBarRightSide>
          <Login>
            usuário{' '}
          </Login>
          <Logout
            onClick={logout}
            rel="noopener noreferrer"
            className="logout"
          >
            (Sair)
          </Logout>
        </NavBarRightSide>
      </NavBar>
      <MenuDropDown id="nav-items">
        <div className="open-nav">
          <li className="nav-sublinks">
            <a href="#" rel="noopener noreferrer">
              Link 1
            </a>
          </li>
          <hr />
          <li className="nav-sublinks">
            <a href='#' rel="noopener noreferrer">
              Link 2
            </a>
          </li>
          <hr />
        </div>
        <div className="close-nav" onClick={toggleMenu}></div>
      </MenuDropDown>
    </HeaderApp>
  );
}

export default Header;

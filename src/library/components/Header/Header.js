import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
            Usuário{' '}
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
            <Link to={{ hash:"#cores", state: {fromHeader: true}}}>Cores</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#icons", state: {fromHeader: true}}}>Ícones</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#buttons", state: {fromHeader: true}}}>Botões</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#inputs", state: {fromHeader: true}}}>Inputs</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#checkRadios", state: {fromHeader: true}}}>Checkbox - Radio Buttons - Switches</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#pagination", state: {fromHeader: true}}}>Paginação</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#nav-tabs", state: {fromHeader: true}}}>Abas</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#notifications", state: {fromHeader: true}}}>Notificação</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#typography", state: {fromHeader: true}}}>Tipografia</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#modal", state: {fromHeader: true}}}>Modal</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#tooltip", state: {fromHeader: true}}}>Tooltip</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#tabela", state: {fromHeader: true}}}>Tabela</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#card", state: {fromHeader: true}}}>Cards</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#illustrations", state: {fromHeader: true}}}>Ilustração</Link>
          </li>
          <hr />
          <li className="nav-sublinks">
            <Link to={{ hash:"#prototipos", state: {fromHeader: true}}}>Protótipos</Link>
          </li>
          <hr />
        </div>
        <div className="close-nav" onClick={toggleMenu}></div>
      </MenuDropDown>
    </HeaderApp>
  );
}

export default Header;

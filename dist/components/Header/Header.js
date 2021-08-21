"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterHashLink = require("react-router-hash-link");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  var toggleMenu = function toggleMenu() {
    var navbar = document.querySelectorAll('#navbar');
    navbar.forEach(function (nav) {
      return nav.classList.toggle('Navbar__ToggleShow');
    });
    var navs = document.querySelectorAll('#nav-items');
    navs.forEach(function (nav) {
      return nav.classList.toggle('Navbar__ToggleShow');
    });
  };

  var logout = function logout() {
    alert('Click no logout');
  };

  return /*#__PURE__*/_react.default.createElement(_styles.HeaderApp, {
    id: "header-app"
  }, /*#__PURE__*/_react.default.createElement(_styles.NavBar, {
    id: "navbar"
  }, /*#__PURE__*/_react.default.createElement(_styles.NavBarLeftSide, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "logo-vortx",
    src: "https://cdn.vortx.com.br/images/logo-expanded-dourado.svg",
    alt: "Logo V\xF3rtx",
    title: "V\xF3rtx | Inova\xE7\xE3o e transpar\xEAncia em servi\xE7os fiduci\xE1rios"
  })), /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    onClick: toggleMenu
  }, /*#__PURE__*/_react.default.createElement(_styles.Bar, {
    width: "20px",
    className: "bar1"
  }), /*#__PURE__*/_react.default.createElement(_styles.Bar, {
    width: "30px",
    className: "bar2"
  }), /*#__PURE__*/_react.default.createElement(_styles.Bar, {
    width: "15px",
    className: "bar3"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, "Tech Based. ", /*#__PURE__*/_react.default.createElement("span", {
    className: "manuscrito"
  }, "Dream"), " Powered.")), /*#__PURE__*/_react.default.createElement(_styles.NavBarRightSide, null, /*#__PURE__*/_react.default.createElement(_styles.Login, null, "Usu\xE1rio", ' '), /*#__PURE__*/_react.default.createElement(_styles.Logout, {
    onClick: logout,
    rel: "noopener noreferrer",
    className: "logout"
  }, "(Sair)"))), /*#__PURE__*/_react.default.createElement(_styles.MenuDropDown, {
    id: "nav-items"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "open-nav"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#cores",
      state: {
        fromHeader: true
      }
    }
  }, "Cores")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#icons",
      state: {
        fromHeader: true
      }
    }
  }, "\xCDcones")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#buttons",
      state: {
        fromHeader: true
      }
    }
  }, "Bot\xF5es")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#inputs",
      state: {
        fromHeader: true
      }
    }
  }, "Inputs")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#checkRadios",
      state: {
        fromHeader: true
      }
    }
  }, "Checkbox - Radio Buttons - Switches")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#pagination",
      state: {
        fromHeader: true
      }
    }
  }, "Pagina\xE7\xE3o")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#nav-tabs",
      state: {
        fromHeader: true
      }
    }
  }, "Abas")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#notifications",
      state: {
        fromHeader: true
      }
    }
  }, "Notifica\xE7\xE3o")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#typography",
      state: {
        fromHeader: true
      }
    }
  }, "Tipografia")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#modal",
      state: {
        fromHeader: true
      }
    }
  }, "Modal")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#tooltip",
      state: {
        fromHeader: true
      }
    }
  }, "Tooltip")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#tabela",
      state: {
        fromHeader: true
      }
    }
  }, "Tabela")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#card",
      state: {
        fromHeader: true
      }
    }
  }, "Cards")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#illustrations",
      state: {
        fromHeader: true
      }
    }
  }, "Ilustra\xE7\xE3o")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-sublinks"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterHashLink.HashLink, {
    to: {
      hash: "#prototipos",
      state: {
        fromHeader: true
      }
    }
  }, "Prot\xF3tipos")), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "close-nav",
    onClick: toggleMenu
  })));
}

var _default = Header;
exports.default = _default;
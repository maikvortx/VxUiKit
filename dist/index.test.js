"use strict";

var _react = require("@testing-library/react");

var _index = require("./index");

describe('render libary components', function () {
  test('renders button component', function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_index.Button, null, "Button 1"));

    var buttonElement = _react.screen.getByText(/Button 1/i);

    expect(buttonElement).toBeInTheDocument();
  });
});
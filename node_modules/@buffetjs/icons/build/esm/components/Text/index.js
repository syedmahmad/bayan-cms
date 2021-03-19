function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var Text = function Text(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "17",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("text", {
    transform: "translate(-9 -4)",
    fill: props.fill,
    fillRule: "evenodd",
    fontFamily: "Lato-Bold, Lato",
    fontSize: "13",
    fontWeight: "bold",
    letterSpacing: ".7"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: "9",
    y: "15"
  }, "Ab")));
};

Text.defaultProps = {
  fill: '#fff'
};
Text.propTypes = {
  fill: PropTypes.string
};
export default Text;
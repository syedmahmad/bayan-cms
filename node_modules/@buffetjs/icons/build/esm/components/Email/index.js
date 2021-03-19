function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var Email = function Email(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "12",
    height: "13",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("text", {
    transform: "translate(-12 -3)",
    fill: props.fill,
    fillRule: "evenodd",
    fontFamily: "Lato-Black, Lato",
    fontSize: "14",
    fontWeight: "700"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: "12",
    y: "14"
  }, "@")));
};

Email.defaultProps = {
  fill: '#fff'
};
Email.propTypes = {
  fill: PropTypes.string
};
export default Email;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var NumberIcon = function NumberIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("text", {
    transform: "translate(-8 -5)",
    fill: props.fill,
    fillRule: "evenodd",
    fontFamily: "Lato-Bold, Lato",
    fontSize: "12",
    fontWeight: "bold"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: "7.06",
    y: "14.5"
  }, "123")));
};

NumberIcon.defaultProps = {
  fill: '#fff'
};
NumberIcon.propTypes = {
  fill: PropTypes.string
};
export default NumberIcon;
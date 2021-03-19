function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var Plus = function Plus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 13",
    width: "13px",
    height: "13px"
  }, props), /*#__PURE__*/React.createElement("g", {
    "data-name": "Layer 2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5.5v12m6-6H.5",
    fill: "none",
    stroke: props.fill,
    strokeLinecap: "round"
  })));
};

Plus.defaultProps = {
  fill: '#fff'
};
Plus.propTypes = {
  fill: PropTypes.string
};
export default Plus;
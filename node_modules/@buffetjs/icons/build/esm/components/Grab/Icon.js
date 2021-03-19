function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

var Icon = function Icon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "5",
    height: "8",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h2v2H0zM3 0h2v2H3zM0 3h2v2H0zM3 3h2v2H3zM0 6h2v2H0zM3 6h2v2H3z"
  })));
};

export default Icon;
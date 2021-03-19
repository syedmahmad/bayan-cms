function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Carret = function Carret(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    viewport: " 0 0 7 5",
    width: "7",
    height: "5"
  }, rest, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 .469c0 .127.043.237.13.33l3.062 3.28a.407.407 0 0 0 .616 0L6.87.8A.467.467 0 0 0 7 .468a.467.467 0 0 0-.13-.33A.407.407 0 0 0 6.563 0H.438A.407.407 0 0 0 .13.14.467.467 0 0 0 0 .468z",
    fillRule: "nonzero",
    fill: fill
  }));
};

Carret.defaultProps = {
  fill: '#333740'
};
Carret.propTypes = {
  fill: PropTypes.string
};
export default Carret;
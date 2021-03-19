function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Play = function Play(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 7 7",
    width: "8px",
    height: "10px"
  }, rest), /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-1018.000000, -100.000000)",
    fill: fill,
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(537.000000, 85.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(461.000000, 4.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(20.000000, 11.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.90191898,3.63963964 L0.23880597,6.96396396 C0.173418621,7.003003 0.117270789,7.00750751 0.0703624733,6.97747748 C0.0234541578,6.94744745 0,6.89339339 0,6.81531532 L0,0.184684685 C0,0.106606607 0.0234541578,0.0525525526 0.0703624733,0.0225225225 C0.117270789,-0.00750750751 0.173418621,-0.003003003 0.23880597,0.036036036 L5.90191898,3.36036036 C5.96730633,3.3993994 6,3.44594595 6,3.5 C6,3.55405405 5.96730633,3.6006006 5.90191898,3.63963964 Z"
  })))))));
};

Play.defaultProps = {
  fill: '#b4b6ba'
};
Play.propTypes = {
  fill: PropTypes.string
};
export default Play;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Bool = function Bool(_ref) {
  var rectFill = _ref.rectFill,
      pathFill = _ref.pathFill,
      rest = _objectWithoutProperties(_ref, ["rectFill", "pathFill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "19",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: rectFill,
    width: "19",
    height: "10",
    rx: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 1a4 4 0 110 8 4 4 0 010-8z",
    fill: pathFill
  })));
};

Bool.defaultProps = {
  pathFill: '#69BA05',
  rectFill: '#fff'
};
Bool.propTypes = {
  pathFill: PropTypes.string,
  rectFill: PropTypes.string
};
export default Bool;
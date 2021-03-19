function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Success = function Success(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    width: "18px",
    height: "18px"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    x: "-3.7%",
    y: "-17.5%",
    width: "107.3%",
    height: "135.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-1"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "0",
    dy: "1",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",
    type: "matrix",
    "in": "shadowBlurOuter1",
    result: "shadowMatrixOuter1"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    "in": "shadowMatrixOuter1"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-702.000000, -89.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#filter-1)",
    transform: "translate(686.000000, 72.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Check-Copy-2-Clipped"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Check-Copy-2",
    transform: "translate(20.000000, 20.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group"
  }, /*#__PURE__*/React.createElement("g", {
    id: "check",
    transform: "translate(0.500000, 0.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.3423951,8.3983456 C14.3423951,8.55907497 14.2861399,8.69569495 14.1736293,8.80820551 L9.80982666,13.1720081 L8.99010683,13.991728 C8.87759626,14.1042385 8.74097629,14.1604938 8.58024691,14.1604938 C8.41951753,14.1604938 8.28289756,14.1042385 8.170387,13.991728 L7.35066717,13.1720081 L5.16876585,10.9901068 C5.05625528,10.8775963 5,10.7409763 5,10.5802469 C5,10.4195175 5.05625528,10.2828976 5.16876585,10.170387 L5.98848568,9.35066717 C6.10099625,9.2381566 6.23761622,9.18190132 6.3983456,9.18190132 C6.55907497,9.18190132 6.69569495,9.2381566 6.80820551,9.35066717 L8.58024691,11.1287359 L12.5341896,7.16876585 C12.6467002,7.05625528 12.7833202,7 12.9440495,7 C13.1047789,7 13.2413989,7.05625528 13.3539095,7.16876585 L14.1736293,7.98848568 C14.2861399,8.10099625 14.3423951,8.23761622 14.3423951,8.3983456 Z",
    id: "Shape",
    fill: fill,
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle-2",
    stroke: fill,
    x: "0",
    y: "0.5",
    width: "19",
    height: "19",
    rx: "9.5"
  }))))))))));
};

Success.defaultProps = {
  fill: '#fff'
};
Success.propTypes = {
  fill: PropTypes.string
};
export default Success;
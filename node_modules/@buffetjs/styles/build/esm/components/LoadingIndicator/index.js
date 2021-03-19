function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        ", " ", " linear infinite\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  > div {\n    width: ", ";\n    height: ", ";\n    /* stylelint-disable */\n    border: ", ";\n    border-top: ", ";\n\n    /* stylelint-enable */\n    border-radius: 50%;\n    animation: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * LoadingIndicator
 *
 */

/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
var spin = keyframes(_templateObject());

var getSize = function getSize(size, small) {
  if (size) {
    return size;
  }

  if (small) {
    return '11px';
  }

  return '26px';
};

var Loader = styled.div(_templateObject2(), function (_ref) {
  var size = _ref.size,
      small = _ref.small;
  return getSize(size, small);
}, function (_ref2) {
  var size = _ref2.size,
      small = _ref2.small;
  return getSize(size, small);
}, function (_ref3) {
  var borderColor = _ref3.borderColor,
      borderWidth = _ref3.borderWidth;
  return "".concat(borderWidth, " solid ").concat(borderColor);
}, function (_ref4) {
  var borderWidth = _ref4.borderWidth,
      borderTopColor = _ref4.borderTopColor;
  return "".concat(borderWidth, " solid ").concat(borderTopColor, " !important;");
}, function (_ref5) {
  var animationTime = _ref5.animationTime;
  return css(_templateObject3(), spin, animationTime);
});

var LoadingIndicator = function LoadingIndicator(_ref6) {
  var animationTime = _ref6.animationTime,
      borderColor = _ref6.borderColor,
      borderTopColor = _ref6.borderTopColor,
      borderWidth = _ref6.borderWidth,
      small = _ref6.small,
      size = _ref6.size;
  return /*#__PURE__*/React.createElement(Loader, {
    animationTime: animationTime,
    borderColor: borderColor,
    borderTopColor: borderTopColor,
    borderWidth: borderWidth,
    small: small,
    size: size
  }, /*#__PURE__*/React.createElement("div", null));
};

LoadingIndicator.defaultProps = {
  animationTime: '2s',
  borderColor: '#f3f3f3',
  borderTopColor: '#555555',
  borderWidth: '4px',
  size: null,
  small: false
};
LoadingIndicator.propTypes = {
  animationTime: PropTypes.string,
  borderColor: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderWidth: PropTypes.string,
  size: PropTypes.string,
  small: PropTypes.bool
};
export default LoadingIndicator;
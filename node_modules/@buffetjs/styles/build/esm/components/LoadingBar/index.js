function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 6px;\n  width: 20%;\n  margin-top: 10px;\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n  border-radius: ", ";\n  &:before {\n    display: block;\n    position: absolute;\n    content: '';\n    left: -200px;\n    width: 200px;\n    height: 6px;\n    background-color: rgb(227, 227, 231);\n    animation: ", " 2s linear infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% { left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * LoadingBar
 *
 */
import styled, { keyframes } from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
/* stylelint-disable */

var loading = keyframes(_templateObject());
/* stylelint-enable */

var LoadingBar = styled.div(_templateObject2(), colors.greyHeader, sizes.borderRadius, loading);
export default LoadingBar;
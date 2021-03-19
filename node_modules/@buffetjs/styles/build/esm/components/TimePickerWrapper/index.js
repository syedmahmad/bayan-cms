function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 95px;\n  position: relative;\n  background-color: ", ";\n  border-radius: ", ";\n  span {\n    z-index: 0;\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n  input {\n    position: relative;\n    z-index: 1;\n    &:focus + span {\n      background-color: ", ";\n      &:before {\n        color: ", ";\n      }\n    }\n    &:focus {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  ul {\n    position: absolute;\n    background-color: transparent;\n    border-top: 1px solid transaprent;\n    top: calc(", " - ", "px);\n    left: 0;\n    z-index: 99;\n    pointer-events: all;\n    &.displayed {\n      background-color: ", ";\n      border-top: 1px solid ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * TimePickerWrapper
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var TimePickerWrapper = styled.div(_templateObject(), colors.white, sizes.borderRadius, sizes.borderRadius, sizes.borderRadius, colors.blueIconBkgd, colors.blueIconTxt, sizes.input.height, sizes.margin * 0.1, colors.white, colors.blueBorder);
export default TimePickerWrapper;
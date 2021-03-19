function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  border-radius: ", ";\n  button[type='button'] {\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    cursor: pointer;\n    outline: 0;\n    border: 0;\n    background: transparent;\n    &:hover {\n      span::before {\n        color: ", ";\n      }\n    }\n    &.shown {\n      span::before {\n        color: ", ";\n      }\n      & + input[type='text'] {\n        padding-right: calc(", " + ", ");\n      }\n    }\n  }\n  span {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n  input {\n    position: relative;\n    z-index: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * InputWrapper
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var InputWrapper = styled.div(_templateObject(), colors.white, sizes.borderRadius, sizes.input.height, sizes.input.height, colors.black, colors.black, sizes.input.height, sizes.input.padding, sizes.borderRadius, sizes.borderRadius);
export default InputWrapper;
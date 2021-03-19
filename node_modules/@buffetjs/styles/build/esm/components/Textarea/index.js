function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 19.1rem;\n  padding: ", " ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  outline: 0;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  background-color: ", ";\n  line-height: 18px;\n  &::-webkit-input-placeholder {\n    color: ", ";\n  }\n  &:focus {\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Textarea
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var StyledTextarea = styled.textarea(_templateObject(), sizes.textarea.padding, sizes.input.padding, sizes.fontWeight.regular, sizes.input.fontSize, colors.lightGrey, sizes.borderRadius, colors.blueTxt, colors.white, colors.greyPlaceholder, colors.blueBorder, colors.greyIconBkgd, colors.brightGrey);
export default StyledTextarea;
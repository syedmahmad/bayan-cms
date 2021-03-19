function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  padding: 0 ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  cursor: pointer;\n  outline: 0;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  background-color: ", ";\n  padding-right: 30px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: right;\n\n  &::-webkit-input-placeholder {\n    color: ", ";\n  }\n  &:focus {\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Select
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import img from '../../assets/icons/icon_select.svg';
var Select = styled.select(_templateObject(), sizes.input.height, sizes.input.padding, sizes.fontWeight.regular, sizes.input.fontSize, colors.lightGrey, sizes.borderRadius, colors.blueTxt, colors.white, img, colors.greyPlaceholder, colors.blueBorder, colors.greyIconBkgd, colors.brightGrey);
export default Select;
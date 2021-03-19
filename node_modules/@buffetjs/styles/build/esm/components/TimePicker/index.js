function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  padding: 0 ", ";\n  font-family: 'Lato';\n  font-weight: ", ";\n  font-size: ", ";\n  cursor: pointer;\n  outline: 0;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  background-color: transparent;\n  padding-left: calc(", " + ", ");\n  &::-webkit-input-placeholder {\n    color: ", ";\n  }\n  &:focus {\n    border-color: ", ";\n  }\n  &:disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * TimePicker
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var TimePicker = styled.input(_templateObject(), sizes.input.height, sizes.input.padding, sizes.fontWeight.regular, sizes.input.fontSize, colors.lightGrey, sizes.borderRadius, colors.blueTxt, sizes.input.height, sizes.input.padding, colors.greyPlaceholder, colors.blueBorder, colors.brightGrey);
TimePicker.defaultProps = {
  type: 'text'
};
TimePicker.propTypes = {
  type: PropTypes.string
};
export default TimePicker;
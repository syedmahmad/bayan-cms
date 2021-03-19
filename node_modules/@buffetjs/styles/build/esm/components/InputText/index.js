function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  padding: 0 ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  cursor: text;\n  outline: 0;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  background-color: transparent;\n\n  &::-webkit-input-placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * InputText
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var InputText = styled.input(_templateObject(), sizes.input.height, sizes.input.padding, sizes.fontWeight.regular, sizes.input.fontSize, colors.lightGrey, sizes.borderRadius, colors.blueTxt, colors.greyPlaceholder, colors.blueBorder, colors.greyIconBkgd, colors.brightGrey, function (props) {
  return (props.type === 'search' || props.type === 'email' || props.icon) && "\n      padding-left: calc(".concat(sizes.input.height, " + ").concat(sizes.input.padding, ");\n    ");
}, function (props) {
  return props.type === 'password' && "\n      padding-right: calc(".concat(sizes.input.height, " + ").concat(sizes.input.padding, ");\n    ");
});
InputText.defaultProps = {
  type: 'text'
};
InputText.propTypes = {
  type: PropTypes.string
};
export default InputText;
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 0;\n  position: relative;\n  width: ", ";\n  &:focus,\n  &:active {\n    outline: 0;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: calc(-", " / 2);\n    width: ", ";\n    height: ", ";\n    border: 1px solid rgba(16, 22, 34, 0.15);\n    background-color: #fdfdfd;\n    border-radius: 3px;\n    box-sizing: border-box;\n  }\n  &:after {\n    display: none;\n    content: '\f00c';\n    font-family: 'FontAwesome';\n    position: absolute;\n    left: 0;\n    top: 55%;\n    margin-top: calc(-", " / 2);\n    width: ", ";\n    height: ", ";\n    text-align: center;\n    font-size: 9px;\n    color: ", ";\n    line-height: ", ";\n  }\n  &:checked {\n    &:after {\n      display: block;\n    }\n  }\n\n  ", "\n\n  &:disabled {\n    background-color: ", ";\n    cursor: initial;\n    &:after {\n      color: ", ";\n    }\n  }\n  & + label {\n    display: inline-block;\n    font-weight: ", ";\n    font-size: ", ";\n  }\n"], ["\n  cursor: pointer;\n  margin: 0;\n  position: relative;\n  width: ", ";\n  &:focus,\n  &:active {\n    outline: 0;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: calc(-", " / 2);\n    width: ", ";\n    height: ", ";\n    border: 1px solid rgba(16, 22, 34, 0.15);\n    background-color: #fdfdfd;\n    border-radius: 3px;\n    box-sizing: border-box;\n  }\n  &:after {\n    display: none;\n    content: '\\f00c';\n    font-family: 'FontAwesome';\n    position: absolute;\n    left: 0;\n    top: 55%;\n    margin-top: calc(-", " / 2);\n    width: ", ";\n    height: ", ";\n    text-align: center;\n    font-size: 9px;\n    color: ", ";\n    line-height: ", ";\n  }\n  &:checked {\n    &:after {\n      display: block;\n    }\n  }\n\n  ", "\n\n  &:disabled {\n    background-color: ", ";\n    cursor: initial;\n    &:after {\n      color: ", ";\n    }\n  }\n  & + label {\n    display: inline-block;\n    font-weight: ", ";\n    font-size: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Checkbox
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Checkbox = styled.input(_templateObject(), sizes.checkbox.width, sizes.checkbox.width, sizes.checkbox.width, sizes.checkbox.height, sizes.checkbox.width, sizes.checkbox.width, sizes.checkbox.height, colors.darkBlue, sizes.checkbox.height, function (_ref) {
  var someChecked = _ref.someChecked;

  if (someChecked) {
    return "\n        &:after {\n          content: '\f068';\n          display: block;\n          top: 50%;\n          font-size: 10px;\n        }\n      ";
  }

  return '';
}, colors.greyIconBkgd, colors.brightGrey, sizes.fontWeight.semiBold, sizes.input.fontSize);
Checkbox.defaultProps = {
  someChecked: false,
  type: 'checkbox'
};
Checkbox.propTypes = {
  someChecked: PropTypes.bool,
  type: PropTypes.string
};
export default Checkbox;
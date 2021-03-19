function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* General style */\n  height: ", ";\n  padding: 0 ", " ", ";\n  font-weight: ", ";\n  font-size: 1.3rem;\n  line-height: normal;\n  border-radius: ", ";\n  cursor: pointer;\n  outline: 0;\n  background-color: ", ";\n  &:hover, &:active {\n    ", ";\n  }\n  &:focus {\n    outline: 0;\n  }\n\n  \n  ", "\n\n  /* Specific style */\n  ", "\n\n  ", "\n\n  ", "\n  \n    /* FontAwesome icons */\n\n    > span svg {\n      font-size: 10px;\n      vertical-align: initial;\n    }\n\n    /* Custom icons */\n    \n    > svg {\n      height: 10px;\n      width: auto;\n      margin-right: 10px;\n      vertical-align: baseline;\n    }\n\n\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Button
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';
var Button = styled.button(_templateObject(), sizes.button.height.large, sizes.button.padding.leftRight, sizes.button.padding.bottom, sizes.fontWeight.bold, sizes.borderRadius, colors.white, mixins(colors.lightGreyAlpha).bshadow, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n    &:hover {\n      box-shadow: none;\n      cursor: initial;\n    }\n    ";
}, function (_ref2) {
  var color = _ref2.color;
  return color !== 'none' && "\n      background-color: ".concat(colors.button[color].backgroundColor, ";\n      border: 1px solid ").concat(colors.button[color].borderColor, ";\n      color: ").concat(colors.button[color].color, ";\n    ");
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && "\n      background-color: ".concat(colors.button.disabled.backgroundColor, ";\n      border: 1px solid ").concat(colors.button.disabled.borderColor, ";\n      color: ").concat(colors.button.disabled.color, ";\n      &:hover {\n        box-shadow: none;\n        cursor: initial;\n      }\n    ");
}, function (_ref4) {
  var color = _ref4.color;
  return color === 'success' && "\n      min-width: ".concat(sizes.button.minWidth, ";\n    ");
});
Button.defaultProps = {
  color: 'primary',
  disabled: false,
  type: 'button'
};
Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'success', 'delete', 'none']),
  disabled: PropTypes.bool,
  type: PropTypes.string
};
export default Button;
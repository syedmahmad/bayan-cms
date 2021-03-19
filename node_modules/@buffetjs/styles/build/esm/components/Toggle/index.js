function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: ", ";\n  margin: 0;\n  opacity: 0;\n  & + span {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    color: ", ";\n    background: white;\n    font-weight: ", ";\n    & + span {\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      color: ", ";\n      background: white;\n      font-weight: ", ";\n    }\n  }\n  &:not(:checked):not(:indeterminate) + span {\n    background-color: ", ";\n    color: ", ";\n    font-weight: ", ";\n  }\n  &:checked + span {\n    & + span {\n      background-color: ", ";\n      color: ", ";\n      font-weight: ", ";\n    }\n  }\n  &:disabled {\n    &:not(:checked):not(:indeterminate) + span {\n      background-color: ", ";\n      color: ", ";\n      box-shadow: inset -1px 1px 3px rgba(0, 0, 0, 0.1);\n    }\n\n    &:checked + span {\n      & + span {\n        background-color: ", ";\n        color: ", ";\n        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Toggle
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Toggle = styled.input(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, colors.greyToggle, sizes.fontWeight.bold, colors.greyToggle, sizes.fontWeight.bold, colors.darkOrange, colors.white, sizes.fontWeight.black, colors.blue, colors.white, sizes.fontWeight.black, colors.greyIconBkgd, colors.brightGrey, colors.greyIconBkgd, colors.brightGrey);
Toggle.defaultProps = {
  disabled: false,
  type: 'checkbox'
};
Toggle.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string
};
export default Toggle;
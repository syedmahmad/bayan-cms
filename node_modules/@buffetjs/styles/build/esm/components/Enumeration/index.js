function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: ", ";\n  margin: 0;\n  opacity: 0;\n  &:checked + span {\n    background-image: ", ";\n    color: ", ";\n    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);\n    font-weight: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Enumeration
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Enumeration = styled.input(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, colors.blueGradient, colors.white, sizes.fontWeight.bold);
Enumeration.defaultProps = {
  disabled: false,
  type: 'radio'
};
Enumeration.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string
};
export default Enumeration;
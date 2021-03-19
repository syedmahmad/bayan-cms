function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  input,\n  label {\n    display: inline-block;\n    vertical-align: top;\n  }\n  input {\n    margin-top: 4px;\n    width: 14px;\n    height: 12px;\n  }\n  input + label {\n    display: inline-block;\n    width: fit-content;\n    max-width: calc(100% - ", ");\n    margin-left: ", "px;\n    margin-bottom: 0;\n    line-height: 18px;\n    cursor: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * CheckboxWrapper
 *
 */
import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
var CheckboxWrapper = styled.div(_templateObject(), sizes.checkbox.width, sizes.margin, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});
CheckboxWrapper.defaultProps = {
  disabled: false
};
export default CheckboxWrapper;
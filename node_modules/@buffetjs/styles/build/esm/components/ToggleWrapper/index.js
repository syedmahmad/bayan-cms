function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: fit-content;\n  height: 34px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  label {\n    display: inline-block;\n    width: fit-content;\n    height: 100%;\n    position: relative;\n    text-align: center;\n    color: ", ";\n  }\n  span {\n    display: inline-block;\n    width: 53px;\n    height: 100%;\n    line-height: 32px;\n    letter-spacing: 0.1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * ToggleWrapper
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var ToggleWrapper = styled.div(_templateObject(), colors.lightGrey, colors.black);
export default ToggleWrapper;
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: fit-content;\n  height: 34px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  background-color: white;\n  overflow: hidden;\n  label {\n    position: relative;\n    display: inline-block;\n    height: 100%;\n    width: fit-content;\n    color: ", ";\n    span {\n      display: inline-block;\n      padding: 0 1.5rem;\n      line-height: 32px;\n      margin: auto;\n      letter-spacing: 0.65px;\n      font-size: 12px;\n      font-weight: ", ";\n      text-transform: uppercase;\n    }\n    &:not(:last-of-type) {\n      span {\n        border-right: 1px solid ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * EnumerationWrapper
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var EnumerationWrapper = styled.div(_templateObject(), colors.lightGrey, colors.brightGrey, sizes.fontWeight.semiBold, colors.lightGrey);
export default EnumerationWrapper;
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 108px;\n  background: #ffffff;\n  td {\n    height: 106px;\n    line-height: 106px;\n    font-size: 1.3rem;\n    font-weight: ", ";\n    color: ", ";\n    text-align: center;\n    border-collapse: collapse;\n    /* stylelint-disable */\n    border-top: 1px solid #f1f1f2 !important;\n    /* stylelint-enable */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * TableRowEmpty
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var TableRowEmpty = styled.tr(_templateObject(), sizes.fontWeight.regular, colors.blueTxt);
export default TableRowEmpty;
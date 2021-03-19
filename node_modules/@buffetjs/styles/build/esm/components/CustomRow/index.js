function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  cursor: pointer;\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * CustomRow
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var CustomRow = styled.tr(_templateObject(), colors.greyHover);
export default CustomRow;
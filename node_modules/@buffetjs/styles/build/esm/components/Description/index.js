function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Lato;\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Description
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var Description = styled.p(_templateObject(), colors.brightGrey);
export default Description;
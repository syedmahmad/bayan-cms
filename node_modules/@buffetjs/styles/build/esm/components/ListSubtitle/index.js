function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Lato';\n  color: ", ";\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * ListSubtitle
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var ListSubtitle = styled.p(_templateObject(), colors.greySubtitle);
export default ListSubtitle;
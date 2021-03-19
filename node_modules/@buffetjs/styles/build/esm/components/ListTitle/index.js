function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: 'Lato';\n  font-size: 1.8rem;\n  font-weight: ", ";\n  line-height: 2.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * ListTitle
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var ListTitle = styled.p(_templateObject(), colors.blueTxt, sizes.fontWeight.bold);
export default ListTitle;
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  font-family: 'Lato';\n  box-shadow: 0 2px 4px ", ";\n  position: relative;\n  .table-wrapper {\n    width: 100%;\n    overflow-x: scroll;\n  }\n  @media (min-width: ", ") {\n    .table-wrapper {\n      width: 100%;\n      overflow-x: inherit;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Card
 *
 */
import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
var Card = styled.div(_templateObject(), colors.lightGrey, sizes.tablet);
export default Card;
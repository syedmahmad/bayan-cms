function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  > g {\n    fill: #b3b5b9;\n\n    &:hover {\n      fill: #aed4fb;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import Icon from './Icon';
var GrabLarge = styled(Icon)(_templateObject());
export default GrabLarge;
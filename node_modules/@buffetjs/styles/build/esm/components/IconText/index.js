function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 3;\n  transform: translateY(0);\n  ::before {\n    content: '", "';\n    font-family: Lato;\n    font-size: 16px;\n    font-weight: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
import IconWrapper from '../IconWrapper';
var IconText = styled(IconWrapper)(_templateObject(), function (props) {
  return props.text;
}, sizes.fontWeight.bold);
export default IconText;
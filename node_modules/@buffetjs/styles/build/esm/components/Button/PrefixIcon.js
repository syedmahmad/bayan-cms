function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: ", "px;\n  font-size: 0.94em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
import Icon from '../Icon';
var PrefixIcon = styled(Icon)(_templateObject(), sizes.margin);
export default PrefixIcon;
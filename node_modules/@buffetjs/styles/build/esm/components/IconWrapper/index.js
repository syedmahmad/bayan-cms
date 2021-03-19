function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(", " - 2px);\n  height: calc(", " - 2px);\n  color: ", ";\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var IconWrapper = styled.span(_templateObject(), sizes.input.height, sizes.input.height, colors.greyIconColor, function (props) {
  return props.background ? colors.greyIconBkgd : 'transparent';
});
IconWrapper.defaultProps = {
  background: true
};
IconWrapper.propTypes = {
  background: PropTypes.bool
};
export default IconWrapper;
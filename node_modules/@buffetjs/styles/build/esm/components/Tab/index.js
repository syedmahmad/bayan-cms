function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: calc(100% / ", ");\n  height: 3.6rem;\n  &:first-of-type a {\n    border-top-left-radius: 2px;\n  }\n  &:last-of-type a {\n    border-top-right-radius: 2px;\n  }\n  button {\n    width: 100%;\n    height: 100%;\n    border: 0;\n    padding: 0;\n    margin: 0;\n    background: transparent;\n  }\n  a {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 0 ", "px;\n    color: ", ";\n    font-family: 'Lato';\n    font-size: 1.3rem;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-decoration: none;\n    cursor: pointer;\n    background-color: ", ";\n    border-top: 3px solid ", ";\n    border-bottom: 3px solid ", ";\n    p,\n    span {\n      margin: auto;\n    }\n    &.active {\n      border-top: 3px solid ", ";\n      border-bottom: 3px solid white;\n      background-color: white;\n      font-weight: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Tab
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
var Tab = styled.li(_templateObject(), function (props) {
  return props.count;
}, sizes.margin * 2, colors.blueTxt, function (props) {
  return props.background;
}, function (props) {
  return props.background;
}, function (props) {
  return props.background;
}, colors.blueTabBorder, sizes.fontWeight.bold);
Tab.defaultProps = {
  index: 1,
  background: colors.greyTabBkgd
};
Tab.propTypes = {
  background: PropTypes.string,
  index: PropTypes.number
};
export default Tab;
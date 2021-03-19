function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 0;\n  font-family: 'Lato';\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  border: 1px solid transparent;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  transition: all 0.2s ease-out;\n  visibility: hidden;\n  ::-webkit-scrollbar {\n    /* stylelint-disable */\n    width: 0 !important;\n    /* stylelint-enable */\n  }\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &.displayed {\n    height: ", ";\n    transition: all 0.2s ease-out;\n    visibility: visible;\n    border-color: ", ";\n  }\n  li {\n    position: relative;\n    input {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      opacity: 0;\n      z-index: 1;\n      cursor: pointer;\n      &:checked + label,\n      &:hover + label {\n        background-color: ", ";\n      }\n    }\n    label {\n      display: block;\n      position: relative;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n      padding: ", "px 0 ", "px\n        calc(", " + ", ");\n      font-size: 13px;\n      line-height: 30px;\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * TimeList
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var TimeList = styled.ul(_templateObject(), sizes.fontWeight.bold, sizes.input.fontSize, colors.greyIconColor, sizes.timepicker.list.height, colors.lightGrey, colors.greyIconBkgd, sizes.margin * 0.4, sizes.margin * 0.2, sizes.input.height, sizes.input.padding);
export default TimeList;
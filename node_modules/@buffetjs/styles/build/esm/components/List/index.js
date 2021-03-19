function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow-x: scroll;\n  border-radius: ", ";\n  background: white;\n  table {\n    border-collapse: collapse;\n    width: 100%;\n    min-width: 500px;\n    font-family: 'Lato';\n  }\n  thead {\n    tr {\n      height: 3rem;\n      line-height: 0.1rem;\n      font-weight: ", ";\n      text-transform: capitalize;\n      td {\n        background-color: ", ";\n      }\n    }\n  }\n  tbody {\n    color: ", ";\n    tr {\n      height: 5.4rem;\n      &::before {\n        content: '-';\n        display: inline-block;\n        line-height: 1.1em;\n        color: transparent;\n        background-color: transparent;\n        position: absolute;\n        left: 3rem;\n        width: calc(100% - 6rem);\n        height: 1px;\n        margin-top: -", "px;\n      }\n      &:not(:first-of-type)::before {\n        background-color: rgba(14, 22, 34, 0.04);\n      }\n    }\n    td {\n      padding: 0.75em;\n      vertical-align: middle;\n      font-size: 1.3rem;\n      line-height: 1.8rem;\n      &:first-of-type:not(:last-of-type) {\n        padding-left: 3rem;\n      }\n      &:last-of-type:not(:first-of-type) {\n        padding-right: 3rem;\n      }\n    }\n  }\n  @media (min-width: ", ") {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * List
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var List = styled.div(_templateObject(), sizes.borderRadius, sizes.fontWeight.bold, colors.greyHeader, colors.blueTxt, sizes.margin * 0.1, sizes.tablet);
export default List;
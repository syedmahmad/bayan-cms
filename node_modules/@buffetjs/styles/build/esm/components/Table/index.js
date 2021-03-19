function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow-x: scroll;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  background: white;\n  table,\n  .deleteRow {\n    min-width: 500px;\n  }\n  table {\n    width: 100%;\n    min-width: 500px;\n    font-family: 'Lato';\n    overflow: hidden;\n    border-collapse: collapse;\n    &.rowsSelected {\n      tbody {\n        &::before {\n          content: '-';\n          height: ", ";\n          display: block;\n        }\n      }\n    }\n  }\n  .deleteRow {\n    height: ", ";\n    left: 0;\n    top: ", ";\n    padding: 0 25px;\n    font-size: 1.3rem;\n    line-height: ", ";\n    background-color: ", ";\n    font-weight: ", ";\n    button {\n      border: 0;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      color: ", ";\n      outline: 0;\n      svg {\n        margin-left: ", "px;\n      }\n      p,\n      svg {\n        display: inline;\n      }\n    }\n  }\n  tr {\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n    text-align: left;\n    th,\n    td {\n      font-size: 1.3rem;\n      padding: 0 25px;\n      &.checkCell {\n        width: 50px;\n      }\n    }\n  }\n  thead {\n    tr {\n      line-height: 0.1rem;\n      font-weight: ", ";\n      text-transform: capitalize;\n      th {\n        background-color: ", ";\n        height: ", ";\n        p {\n          position: relative;\n          padding-right: ", "px;\n          width: fit-content;\n          line-height: normal;\n          color: ", ";\n          &.clickable {\n            cursor: pointer;\n          }\n        }\n        svg {\n          position: absolute;\n          top: 0;\n          right: 0;\n          line-height: 18px;\n          &.fa-sort-up {\n            top: 4px;\n          }\n          &.fa-sort-down {\n            top: -", "px;\n          }\n        }\n      }\n    }\n  }\n  tbody {\n    background-color: ", ";\n    color: ", ";\n    tr {\n      border-bottom: 1px solid ", ";\n      background-color: white;\n      cursor: pointer;\n      button {\n        padding-bottom: 0;\n      }\n      &:hover {\n        background-color: white;\n        background-color: ", ";\n      }\n      &:not(.deleteRow) {\n        td {\n          height: ", ";\n        }\n      }\n    }\n    td {\n      p {\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        line-height: 16px;\n      }\n    }\n  }\n  span.link-icon {\n    svg {\n      color: ", ";\n    }\n  }\n  @media (min-width: ", ") {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Table
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Table = styled.div(_templateObject(), sizes.table.deleteRow.height, sizes.table.deleteRow.height, sizes.table.header.height, sizes.table.deleteRow.height, colors.greyHover, sizes.fontWeight.bold, colors.darkOrange, sizes.margin, sizes.fontWeight.bold, colors.greyHeader, sizes.table.header.height, sizes.margin * 1.4, colors.blueTxt, sizes.margin * 0.2, colors.greyHover, colors.blueTxt, colors.greySeparator, colors.greyHover, sizes.table.row.height, colors.blueTxt, sizes.tablet);
export default Table;
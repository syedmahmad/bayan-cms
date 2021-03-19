function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ul.pagination {\n    display: table;\n    margin: 0 auto;\n    font-size: 10px;\n    .page-item {\n      display: inline-block;\n      position: relative;\n      vertical-align: middle;\n      .page-link {\n        box-shadow: none;\n        font-family: 'Lato';\n        font-size: 12px;\n        background-color: transparent;\n        color: ", ";\n        &:hover {\n          background-color: transparent;\n        }\n      }\n      &.selected {\n        .page-link {\n          font-weight: ", ";\n        }\n      }\n\n      /* Left & right arrows */\n      &:first-of-type,\n      &:last-of-type {\n        .page-link {\n          width: 10px;\n          height: 15px;\n        }\n      }\n      &:first-of-type .page-link:before,\n      &:last-of-type .page-link:after {\n        content: '';\n        position: absolute;\n        top: calc(50% - 2px);\n        bottom: 0;\n        width: 5px;\n        height: 5px;\n        overflow: hidden;\n        font-size: 12px;\n      }\n      &:first-of-type {\n        .page-link {\n          &:before {\n            left: 0;\n            transform: rotate(234deg) skew(20deg);\n          }\n        }\n        & + span {\n          display: none;\n        }\n      }\n      &:last-of-type .page-link {\n        &:after {\n          right: 0;\n          transform: rotate(54deg) skew(20deg);\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Paging
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Paging = styled.div(_templateObject(), colors.blueTxt, sizes.fontWeight.black);
export default Paging;
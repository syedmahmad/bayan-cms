function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  position: relative;\n  width: 100%;\n  height: 50px;\n  .justify-content-end {\n    display: flex;\n  }\n  .header-title p {\n    width: 100%;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 1.3rem;\n    font-weight: ", ";\n    line-height: normal;\n    color: #787e8f;\n  }\n  .sticky {\n    position: fixed;\n    top: 0;\n    left: 30.6rem;\n    z-index: 1050;\n    background-color: white;\n    width: calc(100vw - 30.6rem);\n    padding-right: 15px;\n    height: 60px;\n    display: flex;\n    .row {\n      width: 100%;\n      margin: auto;\n      margin-top: 16px;\n      .header-title p {\n        display: none;\n      }\n      > div > div {\n        padding-top: 0;\n        h1 {\n          font-size: 2rem;\n          svg {\n            margin-top: 8px;\n          }\n        }\n        button {\n          margin-top: auto;\n          margin-bottom: auto;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Header
 *
 */
import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
var Header = styled.div(_templateObject(), sizes.fontWeight.regular);
export default Header;
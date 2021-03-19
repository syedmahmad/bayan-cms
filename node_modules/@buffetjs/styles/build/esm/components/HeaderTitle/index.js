function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 0.5rem;\n  h1 {\n    position: relative;\n    width: fit-content;\n    max-width: 100%;\n    margin-bottom: 0;\n    padding-right: 18px;\n    font-size: 2.4rem;\n    line-height: normal;\n    font-weight: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  svg {\n    position: absolute;\n    right: 0;\n    top: 0;\n    margin-top: 12px;\n    font-size: 12px;\n    color: rgba(16, 22, 34, 0.35);\n    cursor: pointer;\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * HeaderTitle
 *
 */
import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';
var HeaderTitle = styled.div(_templateObject(), sizes.fontWeight.bold);
export default HeaderTitle;
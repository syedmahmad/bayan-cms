function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * { ", " }\n  html, body { -webkit-font-smoothing: antialiased; }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    background-color: ", ";\n  }\n  p {\n    margin: 0;\n  }\n  a, button {\n    cursor: pointer;\n    outline: 0;\n  }\n  h1, h2, h3, p, label, button, input, textarea {\n    /* stylelint-disable */\n    font-family: 'Lato' !important;\n    /* styleint-enable */\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active {\n    -webkit-transition: \"color 9999s ease-out, background-color 9999s ease-out\";\n    -webkit-transition-delay: 9999s;\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { createGlobalStyle } from 'styled-components';
import mixins from '../../assets/styles/mixins';
import colors from '../../assets/styles/colors';
var GlobalStyle = createGlobalStyle(_templateObject(), mixins().bbox, colors.greyIconBkgd);
export default GlobalStyle;
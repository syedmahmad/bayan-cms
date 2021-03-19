function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: ", ";\n  margin: ", ";\n  align-items: center;\n  padding-left: 10px;\n  background: rgba(0, 126, 255, 0.08);\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  border-radius: 2px;\n  line-height: ", ";\n  color: #007eff;\n  font-size: ", ";\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
var Option = styled.div(_templateObject(), function (_ref) {
  var height = _ref.height;
  return height;
}, function (_ref2) {
  var margin = _ref2.margin;
  return margin;
}, function (_ref3) {
  var lineHeight = _ref3.lineHeight;
  return lineHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.sizes.fonts.md;
});
Option.defaultProps = {
  height: '30px',
  lineHeight: '28px',
  margin: '0',
  theme: {
    main: {
      sizes: {
        fonts: {
          xs: '11px',
          sm: '12px',
          md: '13px',
          lg: '18px'
        }
      }
    }
  }
};
export default Option;
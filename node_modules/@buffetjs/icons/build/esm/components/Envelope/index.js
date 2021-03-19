function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Envelope = function Envelope(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "11",
    height: "9",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M11 2.787V7.66c0 .27-.096.501-.289.693a.946.946 0 01-.693.289H.982a.946.946 0 01-.693-.289A.946.946 0 010 7.661V2.787c.18.2.387.378.62.534a122.87 122.87 0 013.05 2.118c.234.171.423.306.569.402.145.096.338.194.58.294.241.1.466.15.675.15h.012c.209 0 .434-.05.675-.15.242-.1.435-.198.58-.294a13.5 13.5 0 00.568-.402 125.7 125.7 0 013.057-2.118A3.43 3.43 0 0011 2.787zm0-1.805c0 .323-.1.632-.3.927a2.91 2.91 0 01-.75.755A4956.762 4956.762 0 007.078 4.66l-.261.187a6.368 6.368 0 01-.65.433 1.86 1.86 0 01-.354.166.976.976 0 01-.307.055h-.012a.976.976 0 01-.307-.055 1.86 1.86 0 01-.353-.166 6.368 6.368 0 01-.32-.2 12.591 12.591 0 01-.33-.233l-.262-.187c-.372-.262-.908-.635-1.608-1.12-.7-.485-1.12-.777-1.258-.875a3.048 3.048 0 01-.718-.709C.113 1.655 0 1.375 0 1.117 0 .798.085.532.255.32.425.106.667 0 .982 0h9.036c.266 0 .496.096.69.289A.94.94 0 0111 .982z",
    fill: fill
  }));
};

Envelope.defaultProps = {
  fill: '#fff'
};
Envelope.propTypes = {
  fill: PropTypes.string
};
export default Envelope;
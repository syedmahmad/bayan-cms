function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Duplicate = function Duplicate(_ref) {
  var fill = _ref.fill,
      rest = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "13",
    height: "13"
  }, rest, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.304 2.786c.193 0 .357.067.493.203.135.135.203.3.203.493v8.822a.672.672 0 01-.203.493.672.672 0 01-.493.203H5.339a.672.672 0 01-.493-.203.672.672 0 01-.203-.493v-2.09H.696a.672.672 0 01-.493-.203A.672.672 0 010 9.518V4.643c0-.194.048-.406.145-.639.097-.232.213-.415.348-.55l2.96-2.96c.136-.136.32-.252.551-.349C4.237.048 4.45 0 4.643 0H7.66c.193 0 .358.068.493.203.135.136.203.3.203.493v2.38c.329-.194.639-.29.929-.29h3.018zM8.357 4.33L6.188 6.5h2.17V4.33zM3.714 1.545l-2.169 2.17h2.17v-2.17zM5.136 6.24L7.43 3.946V.93H4.643v3.017a.672.672 0 01-.203.494.672.672 0 01-.494.203H.93v4.643h3.714V7.429c0-.194.048-.407.145-.639.097-.232.213-.416.348-.551zm6.935 5.832V3.714H9.286v3.018a.672.672 0 01-.203.493.672.672 0 01-.494.204H5.571v4.642h6.5z",
    fill: fill,
    fillRule: "nonzero",
    fillOpacity: ".75"
  }));
};

Duplicate.defaultProps = {
  fill: '#fff'
};
Duplicate.propTypes = {
  fill: PropTypes.string
};
export default Duplicate;
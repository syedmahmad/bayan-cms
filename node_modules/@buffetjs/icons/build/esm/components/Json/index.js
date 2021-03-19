import React from 'react';
import PropTypes from 'prop-types';

var Json = function Json(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: props.fill,
    fillRule: "evenodd",
    fontFamily: "Lato-Bold, Lato",
    fontSize: "12",
    fontWeight: "bold"
  }, /*#__PURE__*/React.createElement("text", {
    transform: "translate(0 -5)"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: ".452",
    y: "15"
  }, "{", "\xA0\xA0\xA0\xA0\xA0", "} ")), /*#__PURE__*/React.createElement("text", {
    letterSpacing: "1",
    transform: "translate(0 -5)"
  }, /*#__PURE__*/React.createElement("tspan", {
    x: "6.449",
    y: "12"
  }, "\u2026"))));
};

Json.defaultProps = {
  fill: '#fff'
};
Json.propTypes = {
  fill: PropTypes.string
};
export default Json;
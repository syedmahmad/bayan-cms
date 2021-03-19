function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var Component = function Component(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "13",
    height: "11",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: props.fill,
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5 3.72)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    width: "1",
    height: "5",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "4",
    width: "3",
    height: "3",
    rx: "1.5"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(60 6.227 9.687)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2",
    width: "1",
    height: "5",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "3",
    height: "3",
    rx: "1.5"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-60 1.775 1.025)"
  }, /*#__PURE__*/React.createElement("rect", {
    transform: "matrix(-1 0 0 1 3 0)",
    x: "1",
    y: "2",
    width: "1",
    height: "5",
    rx: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "3",
    height: "3",
    rx: "1.5"
  }))));
};

Component.defaultProps = {
  fill: '#fff'
};
Component.propTypes = {
  fill: PropTypes.string
};
export default Component;
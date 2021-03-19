function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  ", "\n\n  * {\n    font-family: 'Lato';\n\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  .DateInput {\n    width: 100%;\n  }\n\n  svg.fa-calendar-alt {\n    font-size: 14px;\n  }\n\n  input {\n    font-weight: ", ";\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: ", ";\n    padding: 0 ", ";\n    font-size: ", ";\n    cursor: pointer;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    color: ", ";\n    background-color: transparent;\n    padding-left: 42px;\n    &::-webkit-input-placeholder {\n      color: ", ";\n    }\n    &:disabled {\n      background-color: transparent;\n      cursor: not-allowed;\n    }\n  }\n\n  .SingleDatePicker,\n  .SingleDatePickerInput__withBorder {\n    width: 100%;\n  }\n\n  .SingleDatePickerInput__withBorder {\n    border: 0;\n  }\n\n  .DateInput_input__focused {\n    border-color: ", ";\n  }\n\n  .DayPicker_weekHeader {\n    color: ", ";\n    border-top: 1px solid #f9f9f9;\n    margin-top: -10px;\n    li {\n      padding-top: 7px;\n      padding-bottom: 5px;\n      small {\n        font-size: 1.3rem;\n      }\n    }\n  }\n\n  .DayPicker__withBorder {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    border: 1px solid #f9f9f9;\n    background: white;\n    position: absolute;\n  }\n\n  .DateInput_fang {\n    display: none;\n  }\n\n  .CalendarMonth_caption {\n    font-size: 1.3rem;\n    padding-bottom: 45px;\n    padding-top: 23px;\n  }\n\n  .DayPicker_transitionContainer {\n    padding: 4px;\n  }\n\n  .DayPickerKeyboardShortcuts_show {\n    display: none;\n  }\n\n  .DayPickerNavigation {\n    div[role='button'] {\n      font-size: 21px;\n      width: 35px;\n      height: 33px;\n      color: ", ";\n      border-radius: 0;\n      text-align: center;\n      top: 20px;\n      &,\n      &:hover {\n        border: 0;\n      }\n      &.DayPickerNavigation_leftButton__horizontalDefault {\n        &::before {\n          content: '\u2039';\n        }\n      }\n      &.DayPickerNavigation_rightButton__horizontalDefault {\n        &::before {\n          content: '\u203A';\n        }\n      }\n      svg {\n        display: none;\n      }\n      &:hover {\n        background: #eee;\n      }\n    }\n  }\n\n  td {\n    position: relative;\n    cursor: pointer;\n    width: 34px;\n    height: 18px;\n    font-size: 1.3rem;\n\n    &,\n    &.CalendarDay__selected,\n    &.CalendarDay__selected:active,\n    &.CalendarDay__selected:hover,\n    &.CalendarDay__default:hover {\n      border: 0;\n    }\n    &.CalendarDay__today {\n      &::before {\n        content: '';\n        display: inline-block;\n        border-left: 7px solid transparent;\n        border-bottom: 7px solid #005fea;\n        border-top-color: rgba(0, 0, 0, 0.2);\n        position: absolute;\n        bottom: 4px;\n        right: 4px;\n      }\n    }\n    &.CalendarDay__selected {\n      background-color: #007eff;\n      color: #fff;\n      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n      &.CalendarDay__today {\n        &::before {\n          border-bottom: 7px solid white;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * DatePicker
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-dates/lib/css/_datepicker.css';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var DatePicker = styled.div(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "\n    z-index: 9;\n  ";
}, sizes.fontWeight.regular, sizes.input.height, sizes.input.padding, sizes.input.fontSize, colors.lightGrey, sizes.borderRadius, colors.black, colors.greyPlaceholder, colors.blueBorder, colors.black, colors.black);
DatePicker.defaultProps = {
  isOpen: false
};
DatePicker.propTypes = {
  isOpen: PropTypes.bool
};
export default DatePicker;
import colors from './colors';
export var mixins = function mixins() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : colors.lightGreyAlpha;
  return {
    bbox: 'box-sizing: border-box;\n' + '-moz-box-sizing: border-box;\n' + '-webkit-box-sizing: border-box;',
    bshadow: "-webkit-box-shadow: inset 0 0 30px ".concat(color, ";\n") + "-moz-box-shadow: inset 0 0 30px ".concat(color, ";\n") + "box-shadow: inset 0 0 30px ".concat(colors, ";"),
    overlay: "-webkit-box-shadow: inset 0px 0px 3px 1px ".concat(color, ";\n") + "-moz-box-shadow: inset 0px 0px 3px 1px ".concat(color, ";\n") + "box-shadow: inset 0px 0px 3px 1px ".concat(colors, ";")
  };
};
export default mixins;
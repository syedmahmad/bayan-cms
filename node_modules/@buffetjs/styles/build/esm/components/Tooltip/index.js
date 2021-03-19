function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5rem 0.7rem !important;\n  opacity: 1 !important;\n  border-radius: ", " !important;\n  max-width: 400px;\n  max-height: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* stylelint-disable declaration-no-important */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'; // Add !important to customize CSS is recommended by react-tooltip in the official readme

var Tooltip = styled(ReactTooltip).attrs(function (_ref) {
  var place = _ref.place,
      delayShow = _ref.delayShow,
      theme = _ref.theme;
  return {
    // Pre set the tooltip static props.
    effect: 'solid',
    place: place,
    delayShow: delayShow,
    arrowColor: 'transparent',
    backgroundColor: theme.main.colors.greyDark
  };
})(_templateObject(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.sizes.borderRadius;
});
Tooltip.defaultProps = {
  delayShow: 500,
  place: 'bottom',
  theme: {
    main: {
      colors: {
        greyDark: '#292b2c'
      },
      sizes: {
        borderRadius: '2px'
      }
    }
  }
};
Tooltip.propTypes = {
  delayShow: PropTypes.number,
  place: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object
};
export default Tooltip;
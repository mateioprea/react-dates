import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import isTouchDevice from '../utils/isTouchDevice';

const propTypes = forbidExtraProps({
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string, // also used as label
    displayValue: PropTypes.string,
    inputValue: PropTypes.string,
    screenReaderMessage: PropTypes.string,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    showCaret: PropTypes.bool,

    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDownShiftTab: PropTypes.func,
    onKeyDownTab: PropTypes.func,

    onKeyDownArrowDown: PropTypes.func,
    onKeyDownQuestionMark: PropTypes.func,

    // accessibility
    isFocused: PropTypes.bool, // describes actual DOM focus
});

export default class HourInput extends React.Component {

}
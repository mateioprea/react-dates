import React from 'react';

export default class TimePicker extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="picker-container">
                <h3>{this.props.monthIndex % 2 == 0 ? 'End Time' : 'Start Time'}</h3>
                <div className="hour-picker">
                    <input type="text" className="hpicker hour" placeholder="HH" max="12"/>
                    <span className="decorator">:</span>
                    <input type="text" className="hpicker minutes" placeholder="MM" max="59"/>
                </div>
            </div>
        )
    }
};
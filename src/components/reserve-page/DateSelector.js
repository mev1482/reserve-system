import React from 'react';
import DatePicker from "react-datepicker";
import _ from 'lodash';
import './reserve-page.css'
// import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css"

class DateSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date()
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      var stateHolder = _.clone(this.state);
      stateHolder.selectedDate = event;
      this.setState(stateHolder);
    }

    render(){
      return (
        <div className="date-picker">
          <DatePicker
          minDate={new Date()}
          maxDate={new Date(Date.now() + 12096e5)}
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          />
        </div>
      )
    }
}

// <TimePicker  />
export default DateSelector;

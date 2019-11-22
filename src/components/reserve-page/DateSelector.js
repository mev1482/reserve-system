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
      this.click(this.state.selectedDate);

      this.handleChange = this.handleChange.bind(this);
    }
    click = (newDate) => {
      this.props.setDate(newDate);
    }

    handleChange(event) {
      var stateHolder = _.clone(this.state);
      stateHolder.selectedDate = event;
      this.setState(stateHolder);
      this.click(event)
    }

    render(){
      return (
        <div className="date-picker">
          <h2>Select A Date</h2>
          <div>
          <DatePicker
          minDate={new Date()}
          maxDate={new Date(Date.now() + 12096e5)}
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          />
          </div>
        </div>
      )
    }
}

// <TimePicker  />
export default DateSelector;

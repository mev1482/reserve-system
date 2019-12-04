import React from 'react';
import DatePicker from "react-datepicker";
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './reserve-page.css'

import "react-datepicker/dist/react-datepicker.css"

class DateSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date(),
        selectedEndDate: new Date(Date.now() + 6996e5),
        isRecurring: false,
      };
      this.click(this.state.selectedDate);

      this.handleChange = this.handleChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }
    click = (newDate) => {
      this.props.setDate(newDate);
    }

    setParentRecurring = (isRecurring) => {
      this.props.isRecurring(isRecurring);
    }

    handleChange(event) {
      var stateHolder = _.clone(this.state);
      stateHolder.selectedDate = event;
      this.setState(stateHolder);
      this.click(event)
    }

    handleEndDateChange(event) {
      var stateHolder = _.clone(this.state);
      stateHolder.selectedEndDate = event;
      this.setState(stateHolder);
      this.props.setEndDate(event)
    }

    setRecurring() {
      var stateHolder = this.state;
      stateHolder.isRecurring = !stateHolder.isRecurring;
      this.setParentRecurring(stateHolder.isRecurring);
      this.setState(stateHolder);
    }

    render(){
      return (
        <div className="date-picker-component">
          <h2 className="black-header">Select A Date</h2>
          <div className="date-content-holder">
          <h4>{this.state.isRecurring ? "Start Date" : "Date"}</h4>
          <div className="date-icon-holder">
              <div className="search-icon-wrapper">
                <FontAwesomeIcon icon={faSearch} color="white"/>
              </div>
              <DatePicker
                  className="date-picker"
                  minDate={new Date()}
                  maxDate={new Date(Date.now() + 12096e5)}
                  selected={this.state.selectedDate}
                  onChange={this.handleChange}/>
            </div>
            {this.state.isRecurring ?
              <>
              <h4>End Date:</h4>
              <div className="date-icon-holder">
                  <div className="search-icon-wrapper">
                    <FontAwesomeIcon icon={faSearch} color="white"/>
                  </div>
                  <DatePicker
                      className="date-picker"
                      minDate={new Date(Date.now() + 6996e5)}
                      maxDate={new Date(Date.now() + 102096e5)}
                      selected={this.state.selectedEndDate}
                      onChange={this.handleEndDateChange}/>
                </div></> : <></>}
          </div>
          {this.props.canRecur === false ?
          <div className="recurring-wrapper">
            <Button color={this.state.isRecurring ? "primary" : ""} variant="contained" onClick={() => this.setRecurring()}>Make Recurring</Button>
          </div> : <></>}
        </div>
      )
    }
}

// <TimePicker  />
export default DateSelector;

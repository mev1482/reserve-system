import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import './reserve-page.css'

function SubmitButton(props) {

    return(
    <div>
      <Link
        className="confirmLink"
        to={{
          pathname: '/confirm',
          state:
          {
            reservationInformation:
            {
              roomSelected: _.clone(props.reservationInfo.selectedRoom),
              timeSelected: _.get(props.reservationInfo, 'selectedTime.name',null),
              buildingSelected:_.get(props, 'building',"")
            }
          },
      }}>
        <Button className="submit-button" disabled={!props.reservationInfo.roomSelected} variant="contained">Submit</Button>
      </Link>
    </div>
    )
}

export default SubmitButton;

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
          state: { reservationInformation: props.reservationInfo },
        }}>
        <Button className="submit-button" variant="contained">Submit</Button>
      </Link>
    </div>
    )
}

export default SubmitButton;

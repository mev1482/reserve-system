import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './confirm-page.css'
import _ from 'lodash';

function SubmitButton(props) {
    return(
    <div>
      <Link
        className="confirmLink"
        to={{
          pathname: '/confirm'}}>
        <Button className="confirm-button" variant="contained">Submit</Button>
      </Link>
    </div>
    )
}

export default SubmitButton;

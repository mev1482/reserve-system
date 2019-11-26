import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function FloorLevelButtons(props) {
  const floorButtons = props.floors.map((item, index) =>
  <Button className="mark" variant="contained" >{item}</Button>);
  return (
    <ButtonGroup>
      {floorButtons}
    </ButtonGroup>
  );
}

export default FloorLevelButtons;

import React from 'react';

function FloorLevelButtons(props) {
  const floorButtons = props.floors.map((item, index) => <button onClick={props.floorSelected === index ? null : () => props.changeFloor(index)}>{item}</button>);
  return (
    <>
      {floorButtons}
    </>
  );
}

export default FloorLevelButtons;

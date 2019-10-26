import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

function FloorLevelButtons(props) {
  const floorButtons = props.floors.map((item, index) => <button onClick={() => props.changeFloor(index)}>{item}</button>
    // <li><input key={index} checked={item.label === props.value ? "checked" : null} value={item.label} type="radio" name={props.targetName} onChange={props.handleChange}/>{item.label}</li>
  );
  return (
    <>
      {floorButtons}
    </>
  );
}

export default FloorLevelButtons;

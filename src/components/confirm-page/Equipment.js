import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ConfirmButton from './ConfirmButton';
import EquipmentModal from './EquipmentModal';
import _ from 'lodash';
import './confirm-page.css'

class Equipment extends React.Component {

  constructor(props){
    super(props);

    this.fakeData =
    {
      library: ['HDMI Cable', 'Calculator', 'Mac Book'],
      magic: ['VR device','Xbox','Game Controller','Camera','Speakers'],
      recreation: ['Dodgeballs','Baseballs','Basketballs','Frisbees']
    }
    this.state =
    {
      showModal: false,
      selectedEquipment: [],
      availableEquipment: this.fakeData[props.building]
    };
    this.closeModal = this.closeModal.bind(this);
    this.setEquipment = this.setEquipment.bind(this);
  }

  setEquipment(equipment) {
    var stateHolder = _.clone(this.state);
    stateHolder.selectedEquipment = equipment;
    stateHolder.showModal = false;
    this.setState(stateHolder);
  }

  showModal() {
    if(this.state.showModal)
    return;
    var stateHolder = _.clone(this.state);
    stateHolder.showModal = true;
    this.setState(stateHolder);
  }

  closeModal() {
    var stateHolder = _.clone(this.state);
    stateHolder.showModal = false;
    this.setState(stateHolder);
  }

  render(){
  let ammenities = {};
  return (
    <div className="equipment-component">
      <h2 className="black-header">Equipment</h2>
      <div className="equipment-content">
      {_.get(this.state,'selectedEquipment',[]).length === 0 ?
        <h2>No Equipment Selected</h2> :<>
        <h2>Equipment Currently Selected:</h2>
          <ul className="ammenities-list">
            {_.get(this.state,'selectedEquipment',['equipment1','equipment2','equipment3']).map((equipment) => (
              <h3 className="display-info"><i>{equipment}</i></h3>
            ))}
          </ul></>}
          <EquipmentModal
              onBlur={() => this.closeModal()}
              showModal={_.get(this.state,'showModal',false)}
              closeModal={this.closeModal}
              setEquipment={this.setEquipment}
              removeEquipment={this.removeEquipment}
              selectedEquipment={this.state.selectedEquipment}
              availableEquipment={this.state.availableEquipment}/>
              </div>
          <div className="select-button-wrapper">
            <button className="float-right select-button" variant="contained" onClick={()=>this.showModal()}>Select Equipment</button>
          </div>
    </div>
  )}
}

export default Equipment;

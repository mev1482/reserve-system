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
    this.state =
    {
      showModal: false,
      selectedEquipment: [],
      availableEquipment: ["godzilla","king kong", "jesus"]
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
      {_.get(this.state,'selectedEquipment',[]).length === 0 ?
        <h2 className="mark">No Equipment Selected</h2> :
          <ul className="ammenities-list">
            {_.get(this.state,'selectedEquipment',['equipment1','equipment2','equipment3']).map((equipment) => (
              <li><i>{equipment}</i></li>
            ))}
          </ul>}
          <EquipmentModal
              showModal={_.get(this.state,'showModal',false)}
              closeModal={this.closeModal}
              setEquipment={this.setEquipment}
              removeEquipment={this.removeEquipment}
              selectedEquipment={this.state.selectedEquipment}
              availableEquipment={this.state.availableEquipment}/>
          <button onClick={()=>this.showModal()}>CLICK</button>
    </div>
  )}
}

export default Equipment;

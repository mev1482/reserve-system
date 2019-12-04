import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ConfirmButton from './ConfirmButton';
import _ from 'lodash';
import './confirm-page.css'

class EquipmentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      selectedEquipment: _.get(props,'selectedEquipment',[])
    }
  }

  addEquipment(equipment) {
    var stateHolder = _.clone(this.state);
    stateHolder.selectedEquipment.push(equipment);
    this.setState(stateHolder);
  }

  removeEquipment(equipment) {
    var stateHolder = _.clone(this.state);
    stateHolder.selectedEquipment = _.remove(stateHolder.selectedEquipment,
      (mark) => {
         return equipment !== mark});
    this.setState(stateHolder);
  }
  render(){
    var state = this.state;
  return (
    <>
    <div className={"modal" + (_.get(this.props,'showModal',false) === true ? "" : " not-visible")}>
        <div className="modal-main">
        <h3 className="black-header">Select Equipment</h3>
        <div className="equipment-container">
          {_.get(this.props,'availableEquipment',['equipment1','equipment2','equipment3']).map((equipment) => (
            <Button variant="contained" color={
              _.indexOf(_.get(this.state,'selectedEquipment',[]),equipment) !== -1 ?
              "primary" : ""}
              onClick={_.indexOf(_.get(this.state,'selectedEquipment',[]),equipment) !== -1 ?
              () => this.removeEquipment(equipment) : ()=> this.addEquipment(equipment)}><i>{equipment}</i> </Button>
          ))}
         </div>
          <Button
            className="float-left"
            onClick={() => this.props.closeModal()}>Cancel
          </Button>
          <Button
            className="float-right"
            onClick=
            {
              () => this.props.setEquipment(_.get(state,'selectedEquipment',[]))
            }>Submit
            </Button>
        </div>
    </div>
    </>
  )}
}

export default EquipmentModal;

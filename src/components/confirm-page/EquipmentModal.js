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
          {_.get(this.props,'availableEquipment',['equipment1','equipment2','equipment3']).map((equipment) => (
            <Button variant="contained" color={
              _.indexOf(_.get(this.state,'selectedEquipment',[]),equipment) !== -1 ?
              "primary" : ""}
              onClick={_.indexOf(_.get(this.state,'selectedEquipment',[]),equipment) !== -1 ?
              () => this.removeEquipment(equipment) : ()=> this.addEquipment(equipment)}><i>{equipment}</i> </Button>
          ))}
          <button onClick={() => this.props.closeModal()}>Cancel</button>
          <button onClick={() => this.props.setEquipment(_.get(state,'selectedEquipment',[]))}>Submit</button>
        </div>
    </div>
    </>
  )}
}

export default EquipmentModal;

import React from 'react';


class RightSideBar extends React.Component {

  render() {
    return (
      <div className="right-side-bar">
        <button onClick={this.props.toggleView}>Toggle</button>
        <button className="submit-button">Submit</button>
      </div>
    );
  }
}

export default RightSideBar

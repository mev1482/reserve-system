import React from 'react';


class RightSideBar extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.toggleView}>Toggle</button>
        <button>Submit</button>
      </div>
    );
  }
}

export default RightSideBar

import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  setStatus() {
    this.setState({
      status: 'On',
    });
  }

  render() {
    return (
      <div className="toggler" onClick={this.setStatus.bind(this)}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;

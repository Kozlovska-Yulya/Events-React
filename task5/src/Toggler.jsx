import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  toggleStatus() {
    this.setState((prevState) => ({
      status: prevState.status === 'On' ? 'Off' : 'On',
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggleStatus.bind(this)}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;

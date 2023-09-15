import React from 'react';

const Coral = '#ff7f50';
const Aqua = '#00ffff';
const Bisque = '#ffe4c4';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '',
    };
  }

  handleMouseOver = (color) => {
    this.setState({ selectedColor: color });
  };

  handleMouseOut = () => {
    this.setState({ selectedColor: '' });
  };

  render() {
    const { selectedColor } = this.state;
    return (
      <div>
        <div className="picker__title">{this.selectedColor}</div>
        <div className="colorNameContainer">
          {selectedColor && <span className="colorName">{selectedColor}</span>}
        </div>
        <div>
          <button
            style={{ backgroundColor: Coral }}
            onMouseOver={() => this.handleMouseOver('Coral')}
            onMouseOut={this.handleMouseOut}
            className="picker__button picker__button_coral"
          ></button>
          <button
            style={{ backgroundColor: Aqua }}
            onMouseOver={() => this.handleMouseOver('Aqua')}
            onMouseOut={this.handleMouseOut}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            style={{ backgroundColor: Bisque }}
            onMouseOver={() => this.handleMouseOver('Bisque')}
            onMouseOut={this.handleMouseOut}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

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

  // Обработчик события для наведения курсора на кнопку Coral
  handleMouseOver = (color) => {
    this.setState({ selectedColor: color });
  };

  // Обработчик события для снятия курсора с кнопки
  handleMouseOut = () => {
    this.setState({ selectedColor: '' });
  };

  render() {
    const { selectedColor } = this.state;

    return (
      <div className="picker">
        <div className="picker__title">{selectedColor}</div>

        <button
          style={{ backgroundColor: Coral }}
          className="picker__button picker__button_coral"
          onMouseOver={() => this.handleMouseOver('Coral')}
          onMouseOut={this.handleMouseOut}
        ></button>

        <button
          style={{ backgroundColor: Aqua }}
          className="picker__button picker__button_aqua"
          onMouseOver={() => this.handleMouseOver('Aqua')}
          onMouseOut={this.handleMouseOut}
        ></button>

        <button
          style={{ backgroundColor: Bisque }}
          className="picker__button picker__button_bisque"
          onMouseOver={() => this.handleMouseOver('Bisque')}
          onMouseOut={this.handleMouseOut}
        ></button>
      </div>
    );
  }
}

export default ColorPicker;

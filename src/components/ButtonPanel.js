import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { handleClick } = props;

  return (
    <div className="buttonPanel">
      <div className="group">
        <Button name="AC" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="+/-" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="%" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="÷" clickHandler={buttonName => handleClick(buttonName)} />
      </div>

      <div className="group">
        <Button name="7" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="8" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="9" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="x" clickHandler={buttonName => handleClick(buttonName)} />
      </div>

      <div className="group">
        <Button name="4" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="5" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="6" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="-" clickHandler={buttonName => handleClick(buttonName)} />
      </div>

      <div className="group">
        <Button name="1" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="2" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="3" color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="+" clickHandler={buttonName => handleClick(buttonName)} />
      </div>

      <div className="group">
        <Button name="0" color="gray" wide clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="." color="gray" clickHandler={buttonName => handleClick(buttonName)} />
        <Button name="=" clickHandler={buttonName => handleClick(buttonName)} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: '',
};

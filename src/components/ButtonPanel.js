import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { clickHandler } = props;

  return (
    <div className="buttonPanel">
      <div className="group">
        <Button name="AC" color="gray" clickHandler={clickHandler} />
        <Button name="+/-" color="gray" clickHandler={clickHandler} />
        <Button name="%" color="gray" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>

      <div className="group">
        <Button name="7" color="gray" clickHandler={clickHandler} />
        <Button name="8" color="gray" clickHandler={clickHandler} />
        <Button name="9" color="gray" clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
      </div>

      <div className="group">
        <Button name="4" color="gray" clickHandler={clickHandler} />
        <Button name="5" color="gray" clickHandler={clickHandler} />
        <Button name="6" color="gray" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>

      <div className="group">
        <Button name="1" color="gray" clickHandler={clickHandler} />
        <Button name="2" color="gray" clickHandler={clickHandler} />
        <Button name="3" color="gray" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>

      <div className="group">
        <Button name="0" color="gray" wide clickHandler={clickHandler} />
        <Button name="." color="gray" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

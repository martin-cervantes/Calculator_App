import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="buttonPanel">
      <div className="group1">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" className="operator" />
      </div>

      <div className="group2">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" className="operator" />
      </div>

      <div className="group3">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" className="operator" />
      </div>

      <div className="group4">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" className="operator" />
      </div>

      <div className="group5">
        <Button name="0" className="zero" />
        <Button name="." />
        <Button name="=" className="operator" />
      </div>
    </div>
  );
}

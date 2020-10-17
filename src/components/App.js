import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator">
        <Display data={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

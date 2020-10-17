import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    name, color, wide, clickHandler,
  } = props;

  return (
    <button
      type="button"
      className={`${color} ${wide ? 'twice' : ''}`}
      onClick={e => clickHandler(e.target.value)}
      value={name}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

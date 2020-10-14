import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, color, wide } = props;

  return (
    <button
      type="button"
      className={`${color} ${wide ? 'twice' : ''}`}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: 'Button',
  color: 'orange',
  wide: false,
};

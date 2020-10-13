import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, className } = props;

  return (
    <button type="button" className={className}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: 'Button',
  className: '',
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { data } = props;

  return (
    <div className="display">
      {data}
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.string.isRequired,
};

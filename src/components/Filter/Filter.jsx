import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        <p>Find contact by name</p>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

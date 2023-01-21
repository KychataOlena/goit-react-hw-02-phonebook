import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, contact, number, onDeletedContact }) => {
  return (
    <>
      <p>{contact}</p>
      <span>{number}</span>
      <button onClick={() => onDeletedContact(id)}>Deleted</button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeletedContact: PropTypes.func.isRequired,
};

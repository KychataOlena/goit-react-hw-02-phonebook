import { ContactItem } from 'components/ContactItem/ContactItem';
import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeletedContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactItem
          id={id}
          contact={name}
          number={number}
          onDeletedContact={onDeletedContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};

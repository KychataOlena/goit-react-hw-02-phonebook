import React from 'react';

export const ContactList = ({ contacts, onDeletedContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <span>{number}</span>
        <button onClick={() => onDeletedContact(id)}>Deleted</button>
      </li>
    ))}
  </ul>
);

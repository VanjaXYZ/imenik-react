import React from "react";
import DeleteContact from "./DeleteContact";
import "./ContactList.css";

const ContactList = ({ contacts }) => {
  return (
    <div className="contactList">
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <div className="contact">
            <li key={contact.name}>
              <span className="name">Name: </span>
              {contact.name}
            </li>
            <li key={contact.number}>
              <span className="num">Number: </span>
              {contact.num}
            </li>
            <DeleteContact />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

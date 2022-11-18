import React from "react";
import DeleteButton from "./DeleteButton";

import "./ContactList.css";

const ContactList = ({ contacts, onDeleteHandler }) => {
  return (
    <div className="contactList">
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <div className="contact">
            <div className="contact-data">
              <li key={contact.id}>
                <span className="name">Name: </span>
                {contact.name} <br></br>
                <span className="num">Number: </span>
                {contact.num}
              </li>
            </div>

            <DeleteButton onDeleteHandler={onDeleteHandler} contact={contact} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

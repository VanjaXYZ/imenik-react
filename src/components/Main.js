import React, { useState } from "react";
import ContactList from "./ContactList";
import NewUser from "./NewUser";
import "./Main.css";

const Main = () => {
  const [contacts, setContacts] = useState([]);

  // Add Contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    // console.log(contact);
  };

  // Delete Contact
  const onDeleteHandler = (index) => {
    setContacts(contacts.filter((contact) => contact.id !== index));
  };

  return (
    <div className="content">
      <NewUser addContact={addContact} />
      <ContactList contacts={contacts} onDeleteHandler={onDeleteHandler} />
    </div>
  );
};

export default Main;

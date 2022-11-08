import React, { useState } from "react";
import ContactList from "./ContactList";
import NewUser from "./NewUser";
import "./Main.css";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="content">
      <NewUser addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Main;

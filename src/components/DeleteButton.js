import React from "react";
import "./DeleteButton.css";

const DeleteButton = ({ onDeleteHandler, contact }) => {
  return (
    <div className="btn">
      <button onClick={() => onDeleteHandler(contact.id)}>X</button>
    </div>
  );
};

export default DeleteButton;

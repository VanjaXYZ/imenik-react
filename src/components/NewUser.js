import React, { useState } from "react";
import "./NewUser.css";

const NewUser = ({ addContact }) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  return (
    <div>
      <form onSubmit={addContact} className="form">
        <div className="newUser">
          <div>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Number:
            <input
              type="number"
              name="number"
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
        </div>
        <button type="button" onClick={() => addContact({ name, num })}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewUser;

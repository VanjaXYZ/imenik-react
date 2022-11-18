import React, { useState, useEffect } from "react";
import "./NewUser.css";

const NewUser = ({ addContact }) => {
  const [num, setNum] = useState("");
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const id = Math.floor(Math.random() * 10000) + 1;

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(name, num));
  }, [name, num]);

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
              autoComplete="off"
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
        <button type="button" onClick={() => addContact({ id, name, num })}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewUser;

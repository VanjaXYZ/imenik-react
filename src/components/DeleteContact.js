import React, { useState } from "react";

const DeleteContact = () => {
  const [isDeleted, setIsDeleted] = useState(true);
  const delBtn = () => {
    setIsDeleted((del) => !del);
    console.log("deleted");
  };
  return (
    <div>
      {isDeleted && (
        <button type="button" onClick={delBtn}>
          Delete
        </button>
      )}
    </div>
  );
};

export default DeleteContact;

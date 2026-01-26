/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";

function CRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
   const [message, setMessage] = useState("");


  // 🔹 Load from localStorage (on mount)
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // 🔹 Save to localStorage (when users change)
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const HandleUser = () => {
    if (name.trim() === "") return;

    if (editId !== null) {
      // UPDATE
      setUsers(
        users.map((user) =>
          user.id === editId ? { ...user, name } : user
        )
      );
      setEditId(null);
      setName("");
      showToast("User Updated ✏️");
    } else {
      // ADD
      // eslint-disable-next-line react-hooks/purity
      setUsers([...users, { name, id: Date.now() }]);
      setName("");
      showToast("User Added ✅");
    }
  };

  const EditItem = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  const DeleteItem = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
    showToast("User Deleted 🗑");
  };


const showToast = (msg) => {
  setMessage(msg);
  setTimeout(() => setMessage(""), 2000);
};

  return (
    <>
      <h2>CRUD + LocalStorage</h2>

      <div className="addUser">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={HandleUser}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="userList">
        {users.map((user) => (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <button onClick={() => EditItem(user)} >Edit</button>
            <button onClick={() => DeleteItem(user.id)}>Delete</button>
          </ul>
        ))}
      </div>

      <div className="tost" style={{position:'absolute',right:'0',padding:'1px 20px', backgroundColor:'red',color:'white'}}>
        <div className="inner-tost">
            <h2>{message}</h2>
        </div>
      </div>
    </>
  );
}

export default CRUD;

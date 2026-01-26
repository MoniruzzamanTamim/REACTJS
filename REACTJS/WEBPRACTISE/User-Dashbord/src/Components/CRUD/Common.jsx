import { useState } from "react";

function Common() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE & UPDATE
  const handleSubmit = () => {
    if (editId !== null) {
      // UPDATE
      setUsers(
        users.map((user) =>
          user.id === editId ? { ...user, name } : user
        )
      );
      setEditId(null);
    } else {
      // CREATE
      setUsers([...users, { id: Date.now(), name }]);
    }
    setName("");
  };

  // DELETE
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React CRUD (Only React)</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Common;

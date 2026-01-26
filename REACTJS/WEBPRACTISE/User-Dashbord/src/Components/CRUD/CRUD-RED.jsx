import React, { useReducer,useEffect } from "react";

const initialValue = {
  users: [],
  name: "",
  editId: null,
  message: ""
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "ADD":
      if (state.name.trim() === "") return state;

      return {
        ...state,
        users: [...state.users, { id: Date.now(), name: state.name }],
        name: "",
        message: "User Added ✅"
      };

    case "EDIT":
      return {
        ...state,
        name: action.payload,
        editId: action.payload.id
      };

    case "UPDATE":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === state.editId ? { ...u, name: state.name } : u
        ),
        name: "",
        editId: null,
        message: "User Updated ✏️"
      };

    case "DELETE":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
        message: "User Deleted 🗑"
      };

    default:
      return state;
  }
};

function CRUDRRED() {
  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  const handleSubmit = () => {
    if (state.editId !== null) {
      dispatch({ type: "UPDATE" });
    } else {
      dispatch({ type: "ADD" });
    }
  };

  const EditItem = (user) => {
    dispatch({ type: "EDIT", payload: user });
  };

  const DeleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  useEffect(() => {
        localStorage.setItem("users",  JSON.stringify(state.users))
  }, [state.users])
  


  return (
    <>
      <h2>CRUD + useReducer</h2>

      {/* Toast */}
      {state.message && <p>{state.message}</p>}

      <div className="addUser">
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          placeholder="Add your value"
        />

        <button onClick={handleSubmit}>
          {state.editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="userList">
        {state.users.map((user) => (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <button onClick={() => EditItem(user)}>Edit</button>
            <button onClick={() => DeleteItem(user.id)}>Delete</button>
          </ul>
        ))}
      </div>
    </>
  );
}

export default CRUDRRED;

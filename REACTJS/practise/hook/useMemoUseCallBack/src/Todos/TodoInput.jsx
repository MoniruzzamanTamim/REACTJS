import React from "react";

function TodoInput({ text, setText, addTodo }) {
  console.log("TodoInput Rendered");

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default React.memo(TodoInput);

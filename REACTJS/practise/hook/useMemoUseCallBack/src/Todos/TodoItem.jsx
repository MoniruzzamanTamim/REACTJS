import React from "react";

function TodoItem({ todo, toggleTodo }) {
  console.log("TodoItem Rendered:", todo.title);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
    </div>
  );
}

export default React.memo(TodoItem);

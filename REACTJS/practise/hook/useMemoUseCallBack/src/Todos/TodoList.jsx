import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  console.log("TodoList Rendered");

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </>
  );
}

export default React.memo(TodoList);

import React, { useState, useCallback, useMemo } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // add todo (useCallback)
  const addTodo = useCallback(() => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: text, completed: false },
    ]);
    setText("");
  }, [text]);

  // toggle todo
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  // useMemo → completed todo filter
  const completedTodos = useMemo(() => {
    console.log("Filtering completed todos...");
    return todos.filter((todo) => todo.completed);
  }, [todos]);

  console.log("TodoApp Rendered");

  return (
    <>
      <h1>Optimized Todo App</h1>

      <TodoInput
        text={text}
        setText={setText}
        addTodo={addTodo}
      />

      <TodoList todos={todos} toggleTodo={toggleTodo} />

      <h3>Completed Todos: {completedTodos.length}</h3>
    </>
  );
}

export default React.memo(TodoApp);

import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Do laundry", completed: false },
  ]);
  useEffect(() => {
    handleTodoClick();
    //
  }, [todos]);
  useEffect(() => {
    console.log("my name");
    //
  }, []);
  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={() => handleTodoClick(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;

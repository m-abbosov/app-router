'use client';

import React, { useEffect, useState } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const CSR = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>CSR Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CSR;

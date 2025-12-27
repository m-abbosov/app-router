'use client';
import { useQuery } from '@tanstack/react-query';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const CSR = () => {
  const { data: todos = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      return res.json();
    },
  });
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

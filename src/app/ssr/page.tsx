export const invalidate = 3600;

const SSR = async () => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store',
  }).then((res) => res.json());
  return (
    <div>
      <h1>SSR Todos</h1>
      <ul>
        {todos.map(
          (todo: { id: number; title: string; completed: boolean }) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? '✅' : '❌'}
            </li>
          )
        )}
      </ul>
      å
    </div>
  );
};

export default SSR;

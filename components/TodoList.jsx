import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  const numberUncompletedTodos = todos.filter((todo) => !todo.completed).length;
  return todos ? (
    <div className=" space-y-4">
      <p className="center-screen">Todos à faire: {numberUncompletedTodos}</p>
      {todos.map(
        ({ id, title, description, priority, createdAt, completed }) => {
          const statusString = completed ? "termine" : "en cours";

          return (
            <TodoCard
              key={id}
              id={id}
              title={title}
              description={description}
              priority={priority}
              date={createdAt}
              status={statusString}
            />
          );
        },
      )}
    </div>
  ) : (
    <p className="text-center text-gray-500 mt-4">Tableau de todos vide</p>
  );
}

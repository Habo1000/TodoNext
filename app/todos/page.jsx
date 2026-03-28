import { getTodos } from "../../lib/actions";
import { prisma } from "@/lib/prisma";
import TodoCard from "../../components/TodoCard";
import Link from "next/link";

export default async function TodosPage() {
  const todos = await prisma.Todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  console.log(todos);
  const numberUncompletedTodos =
    todos && todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <h1 className="center-screen py-8">Liste des todos</h1>
      <div className="center-screen mb-4 text-gray-600">
        <Link
          href="/todos/new"
          className="center-screen inline-block px-6 py-2 mb-6 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Ajouter un todo
        </Link>
      </div>
      {todos ? (
        <div className=" space-y-4">
          <p className="center-screen">
            Todos à faire: {numberUncompletedTodos}
          </p>
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
      )}
      ;
    </>
  );
}

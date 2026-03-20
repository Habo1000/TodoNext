import { getTodos } from "../../lib/actions";
import TodoList from "../../components/TodoList";
import Link from "next/link";

export default async function TodosPage() {
  const todos = await getTodos();
  return (
    <>
      <h1 className="center-screen py-8">Liste des todos</h1>
      <div className="center-screen">
        <Link
          href="/todos/new"
          className="inline-block px-6 py-2 mb-6 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Ajouter un todo
        </Link>
      </div>

      <TodoList todos={todos} />
    </>
  );
}

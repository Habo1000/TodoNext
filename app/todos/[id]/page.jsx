import { notFound } from "next/navigation";
import { getTodoById } from "@/lib/actions";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";

export default async function TodoDetail({ params }) {
  const { id } = await params;

  const todo = await getTodoById(id);

  if (!todo) {
    notFound();
  }

  const { priority, title, description, completed, createdAt } = todo;

  const priorityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }[priority];

  const status = completed ? "completed" : "not completed";

  const statusColor = {
    "not completed": "text-red-500",

    completed: "text-green-500",
  }[status];
  console.log(status);
  const localCreatedAt = new Date(createdAt).toLocaleDateString("fr");

  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 m-8 max-w-md mx-auto">
        <div className="flex flex-col justify-between items-center mb-2 gap-8 text-lg">
          <h2 className="text-lg font-bold">{title}</h2>
          <span
            className={`${priorityColor} text-white text-xs font-semibold px-2 py-1 rounded`}
          >
            {priority}
          </span>

          <p className="mb-2">{description}</p>
          <p className="mb-2 text-gray-500 text-sm">Due: {localCreatedAt}</p>
          <p className={`${statusColor} text-sm`}>Status: {status}</p>

          <Link
            href={`/todos/${id}/edit`}
            className="font-semibold px-2 py-1 rounded cursor-pointer"
          >
            Modifier
          </Link>
          <DeleteButton id={id} />
        </div>
      </div>
      <Link
        href="/todos"
        className="center-screen font-semibold px-2 py-1 rounded cursor-pointer text-lg"
      >
        Retour
      </Link>
    </>
  );
}

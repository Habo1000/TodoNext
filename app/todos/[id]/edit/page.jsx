import { getTodoById } from "@/lib/actions";
import EditTodoForm from "@/components/EditTodoForm";
import { notFound } from "next/navigation";
export default async function editTodoPage({ params }) {
  const { id } = await params;

  const todo = await getTodoById(id);

  if (!todo) notFound();
  return <EditTodoForm todo={todo} />;
}

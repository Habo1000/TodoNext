"use client";

import { useRouter } from "next/navigation";
import { modifyTodo } from "@/lib/actions";

export default function EditTodoForm({
  todo: { id, title, description, priority },
}) {
  const router = useRouter();
  console.log(priority);

  const handleSubmit = async (FormData) => {
    await modifyTodo(id, FormData);
    router.push(`/todos/${id}`);
  };
  return (
    <div className="center-screen h-screen ">
      <form
        action={handleSubmit}
        className="center-screen p-6 gap-4 border rounded-xl"
      >
        <input
          type="text"
          name="title"
          placeholder="Titre du todo"
          className="border p-2 rounded"
          defaultValue={title}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description du todo"
          className="border p-2 rounded"
          defaultValue={description}
          required
        />
        <select name="priority" defaultValue={priority} required>
          <option value="">Selectionnez une valeur </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => router.back()}
        >
          Annuler
        </button>
      </form>
    </div>
  );
}

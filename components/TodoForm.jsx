"use client";

import { addTodo } from "@/lib/actions";
import { useRouter } from "next/navigation";
export default function TodoForm() {
  const router = useRouter();
  const handleSubmit = async (FormData) => {
    await addTodo(FormData);
    router.push("/todos");
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
        />
        <input
          type="text"
          name="description"
          placeholder="Description du todo"
          className="border p-2 rounded"
        />
        <select name="priority">
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
      </form>
    </div>
  );
}

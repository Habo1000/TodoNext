"use client";

import { deleteTodo } from "@/lib/actions";

export default function DeleteButton({ id }) {
  const handleDelete = async () => {
    const confirm = window.confirm("Supprimer la todo ?");
    if (!confirm) return;
    await deleteTodo(id);
  };
  return (
    <button
      onClick={async () => handleDelete()}
      className="font-semibold px-2 py-1 rounded cursor-pointer"
    >
      Supprimer
    </button>
  );
}

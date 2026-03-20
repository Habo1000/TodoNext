"use client";

import { toggleTodo } from "@/lib/actions";

export default function ToggleButton({ id, completed }) {
  return (
    <>
      <button
        onClick={async () => {
          await toggleTodo(id);
          console.log("oui");
        }}
        className="font-semibold px-2 py-1 rounded cursor-pointer"
      >
        Terminé
      </button>
    </>
  );
}

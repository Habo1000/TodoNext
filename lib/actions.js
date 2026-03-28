"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Récupérer tous les todos
export async function getTodos() {
  const todos = await prisma.Todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return todos;
}

export async function getTodoById(id) {
  return await prisma.Todo.findUnique({
    where: { id: parseInt(id) },
  });
}

export async function addTodo(formData) {
  const newTodo = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
  };

  await prisma.Todo.create({ data: newTodo });
  revalidatePath("/todos");
}

export async function toggleTodo(id) {
  const todos = await getTodos();

  const todo = todos.find((el) => el.id === parseInt(id));
  console.log(id);

  if (!todo) return;

  todo.completed = !todo.completed;
  await prisma.Todo.update({
    where: { id: parseInt(id) },
    data: { completed: todo.completed },
  });

  revalidatePath("/todos");
}

export async function deleteTodo(id) {
  await prisma.Todo.delete({
    where: { id: parseInt(id) },
  });

  revalidatePath("/todos");
}

export async function modifyTodo(id, formData) {
  const newTitle = formData.get("title");
  const newDesc = formData.get("description");
  const newPriority = formData.get("priority");

  await prisma.Todo.update({
    where: { id: parseInt(id) },
    data: {
      title: newTitle,
      description: newDesc,
      priority: newPriority,
    },
  });

  revalidatePath("/todos");
  revalidatePath(`/todos/${id}`);
}

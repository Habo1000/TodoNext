"use server";

import fs from "fs";
import { revalidatePath } from "next/cache";

import path from "path";

// Chemin vers le fichier todos.json
const TODOS_PATH = path.join(process.cwd(), "data", "todos.json");

// Récupérer tous les todos
export async function getTodos() {
  const fileContents = fs.readFileSync(TODOS_PATH, "utf-8");
  const todos = JSON.parse(fileContents);
  return todos;
}

export async function getTodoById(id) {
  const todos = await getTodos();
  const todo = todos.find((el) => el.id === id);
  return todo;
}

export async function addTodo(formData) {
  const newTodo = {
    id: Date.now().toString(),
    title: formData.get("title"),
    description: formData.get("description"),
    completed: false,
    priority: formData.get("priority"),
    createdAt: new Date().toISOString(),
  };

  const fileContents = fs.readFileSync(TODOS_PATH, "utf-8");
  const todos = JSON.parse(fileContents);
  todos.push(newTodo);
  fs.writeFileSync(TODOS_PATH, JSON.stringify(todos), "utf-8");
  revalidatePath("/todos");
}

export async function toggleTodo(id) {
  const todos = await getTodos();

  const todo = todos.find((el) => el.id === id);
  console.log(id);

  if (!todo) return;

  todo.completed = !todo.completed;
  fs.writeFileSync(TODOS_PATH, JSON.stringify(todos), "utf-8");

  revalidatePath("/todos");
}

export async function deleteTodo(id) {
  const todos = await getTodos();
  const filteredTodos = todos.filter((el) => el.id !== id);
  console.log(id);

  fs.writeFileSync(TODOS_PATH, JSON.stringify(filteredTodos), "utf-8");
  revalidatePath("/todos");
}

export async function modifyTodo(id, formData) {
  const todos = await getTodos();
  const todo = todos.find((el) => el.id === id);
  const newTitle = formData.get("title");
  const newDesc = formData.get("description");
  const newPriority = formData.get("priority");
  todo.title !== newTitle && (todo.title = newTitle);
  todo.description !== newDesc && (todo.description = newDesc);
  todo.priority !== newPriority && (todo.priority = newPriority);
  fs.writeFileSync(TODOS_PATH, JSON.stringify(todos), "utf-8");
  revalidatePath("/todos");
  revalidatePath(`/todos/${id}`);
}

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h2 className="text-xl font-bold">Gestion ToDos</h2>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/todos"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Todos
            </Link>
          </li>
          <li>
            <Link
              href="/todos/new"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Ajout todo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

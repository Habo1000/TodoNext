import ToggleButton from "./ToggleButton";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
export default function TodoCard({
  id,
  title,
  description,
  priority,
  date,
  status,
}) {
  // Couleur du badge selon la priorité
  const priorityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }[priority];

  const statusColor = {
    "en cours": "text-red-500",
    termine: "text-green-500",
  }[status];

  const localDate = new Date(date).toLocaleDateString("fr");

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <Link href={`/todos/${id}`}>
          <h2 className="text-lg font-bold">{title}</h2>
        </Link>
        <span
          className={`${priorityColor} text-white text-xs font-semibold px-2 py-1 rounded`}
        >
          {priority}
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-2 my-2">
          <p className="mb-2">{description}</p>
          <p className="mb-2 text-gray-500 text-sm">
            A faire pour: {localDate}
          </p>
          <p className={`${statusColor} text-sm`}>Statut: {status}</p>
        </div>
        <div className="flex flex-col items-end gap-2 my-2">
          <ToggleButton id={id} />
          <DeleteButton id={id} />
          <Link
            href={`/todos/${id}/edit`}
            className="font-semibold px-2 py-1 rounded cursor-pointer"
          >
            Modifier
          </Link>
        </div>
      </div>
    </div>
  );
}

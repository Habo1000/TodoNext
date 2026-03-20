export default function Loading() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <div className="border rounded px-26 py-10 animate-pulse space-y-3">
        <div className="h-14 w-60 bg-gray-300 rounded" />
        <div className="h-14 bg-gray-300 rounded" />
      </div>

      <div className="border rounded px-26 py-10 animate-pulse space-y-3">
        <div className="h-14 w-60 bg-gray-300 rounded" />
        <div className="h-14 bg-gray-300 rounded" />
      </div>

      <div className="border rounded px-26 py-10 animate-pulse space-y-3">
        <div className="h-14 w-60 bg-gray-300 rounded" />
        <div className="h-14 bg-gray-300 rounded" />
      </div>
    </div>
  );
}

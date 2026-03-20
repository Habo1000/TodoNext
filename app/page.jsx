import Link from "next/link";

export default function Home() {
  return (
    <header className="center-screen h-screen">
      <h1>Gère tes tâches</h1>
      <Link href="/todos">Vers les todos</Link>
    </header>
  );
}

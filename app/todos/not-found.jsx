import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center-screen h-screen">
      <h1>404 ...</h1>
      <p>Erreur: page non trouvée</p>
      <Link href="/">Retour</Link>
    </div>
  );
}

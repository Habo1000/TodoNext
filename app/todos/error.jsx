"use client";

export default function Error({ error, reset }) {
  return (
    <div className="center-screen h-screen">
      <h1>Erreur: {error.message}</h1>
      <button onClick={() => reset()}>Réesayer</button>
    </div>
  );
}

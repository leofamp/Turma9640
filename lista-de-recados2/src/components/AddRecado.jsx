import { useState } from "react";

export default function AddRecado({ saveAddRecado }) {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={() => saveAddRecado(texto)}>Adicionar</button> {}
    </div>
  );
}
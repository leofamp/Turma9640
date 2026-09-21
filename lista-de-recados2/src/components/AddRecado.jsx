import { useState } from "react";

export default function AddRecado({ saveAddRecado }) {
  const [texto, setTexto] = useState("");

  function adicionar(){
    if (!texto) return
    saveAddRecado(texto)
    setTexto("")
  }

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button> 
    </div>
  );
}


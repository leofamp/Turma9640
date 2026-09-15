import { useState, useEffect } from "react";
import RecadoItem from "./components/RecadoItem";
import AddRecado from "./components/AddRecado";

export default function App() {
  const [recados, setRecados] = useState(() => { 
    const salvos = JSON.parse(window.localStorage.getItem("recados")) || [];
    return salvos;
  });

  useEffect(() => { 
    localStorage.setItem("recados", JSON.stringify(recados));
  }, [recados]);

  function saveAddRecado(texto) {
    const novoRecado = {
      id: Date.now(),
      texto: texto,
    };
    setRecados([...recados, novoRecado]);
  }

  function saveDeleteRecado(recado) {
    const filtrados = recados.filter((r) => r.id !== recado.id);
    setRecados(filtrados);
  }

  return (
    <div>
      <h1>Lista de Recados</h1>
      <AddRecado saveAddRecado={saveAddRecado} />
      {recados.length === 0 ? (
        <p>Nenhum recado ainda.</p>
      ) : (
        recados.map((recado) => (
          <RecadoItem
            key={recado.id}
            recado={recado}
            saveDeleteRecado={saveDeleteRecado}
          />
        ))
      )}
    </div>
  );
}
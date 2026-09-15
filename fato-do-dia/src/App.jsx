import { useEffect, useState } from "react";

export default function App(){
  const [fato, setFato] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  async function buscarFato() {
    setCarregando(true)
    setErro(null)

    try{
      const resposta = await fetch("https://catfact.ninja/fact")
      if (!resposta.ok){
        throw new Error("A API está com erro")
      }
      const dados = await resposta.json()
      setFato(dados.fact)
    }catch(erro){
      setErro("Não foi possível buscar.")
    } finally{
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarFato()
  }, [])

  if (carregando) return <p>Carregando... </p>
  if (erro) return <p>{erro}</p>

  return (
    <div>
      <p>{fato}</p>
      <button onClick={buscarFato}>Buscar outro fato</button>
    </div>
  )
}
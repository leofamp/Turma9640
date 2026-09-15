export default function RecadoItem({ recado, saveDeleteRecado }) {
  return (
    <div>
      <p>{recado.texto}</p>
      <button onClick={() => saveDeleteRecado(recado)}>Excluir</button> {}
    </div>
  );
}
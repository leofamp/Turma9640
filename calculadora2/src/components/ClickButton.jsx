export default function ClickButton(){
    function handleClick(){
        alert("Botão Clicado")
    }

    return(
        <button onClick={handleClick}>
            Clique Aqui
        </button>
    )
}
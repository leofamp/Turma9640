import React, {useState} from "react";

export default function Contador(){
    //Define o estado inicial do contador como 0
    const [contador, setContador] = useState(0);

    //Função chamada ao clicar no botão
    const incremetar = () => {
        setContador(contador + 1);//atualiza o estado
    };
    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incremetar}>Incrementar</button>
        </div>
    )
}
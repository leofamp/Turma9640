import Janela from "./Janela";

export default function Casa(){
    return(
        <div>
            <h1>Minha Casa</h1>
            <div>
                <h2>Sala</h2>
                <Janela largura="100px" altura="100px" cor="blue"/>
                <Janela largura="100px" altura="100px" cor="blue"/>
            </div>
            <div>
                <h2>Quarto</h2>
                <Janela largura="200px" altura="50px" cor="yellow"/>
                <Janela largura="500px" altura="50px" cor="yellow"/>
            </div>
        </div>
    )
}
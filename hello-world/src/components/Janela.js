export default function Janela({largura, altura, cor}){
    return(
        <div style={{
            width: largura,
            height: altura,
            backgroundColor: cor,
            margin: "10px"
        }}
    />
    )
}


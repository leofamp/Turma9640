import React from "react";

export default class ClickButton extends React.Component {
    handleClick = (param) =>{
        alert("Botão clicado com parâmetro: " + param)
    }
    render(){
        return <button onClick={() => this.handleClick('meu parâmetro')}>Clique aqui</button>
    }
}
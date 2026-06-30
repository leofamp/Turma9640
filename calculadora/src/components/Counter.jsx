import React from "react";

export default class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count: 0}
    }
    render(){
        return(
            <div>
                <h1>Estado: {this.state.count}</h1>
            </div>
        )
    }
}
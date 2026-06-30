import { useState } from "react"


export function Calculadora(){
    const [input, setInput] = useState("")

    const handleClick = (value) =>{
        setInput(input + value);

    }
    return(
        <div className="grid shadow-md w-[360px] text-2x1 font-large">
            <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">{input}</span>
                <div className="flex justify-between w-full items-center text 5xl">
                    <span>=</span>
                </div>
            </div>
            <div>
                <button className="" onClick={()=>handleClick("+")}>+</button>
                <button className="" onClick={()=>handleClick("7")}>7</button>
            </div>
        </div>
    )
}
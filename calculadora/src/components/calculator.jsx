import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      if (!input) return;
      setResult(evaluate(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  
  const handleClear = () => {
    setInput("");
    setResult("");
  };
  
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));

  return (
    <div className="grid shadow-md w-[360px] text-2xl font-bold">
      <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
        <span className="flex w-fit justify-self-end text-xl">{input}</span>
        <div className="flex justify-between w-full items-center text-5xl">
          <span>=</span>
          <span className="flex h-fit">{result}</span>
        </div>
      </div>
      <div className="bg-white grow h-[480px] grid grid-cols-4">
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#FEFAE0]"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <div className="justify-center items-center bg-[#E9EDC9]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <div className="justify-center items-center bg-[#E9EDC9]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("6")}
        >
          6
        </button>

        <div className="justify-center items-center bg-[#E9EDC9]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <div className="justify-center items-center bg-[#E9EDC9]" />

        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] text-sm"
          onClick={handleDelete}
        >
          DEL
        </button>
        <button
          className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#FEFAE0]"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

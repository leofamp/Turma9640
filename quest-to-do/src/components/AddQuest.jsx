import { useState } from "react"

export default function AddQuest(props){
    const [title, setTitle] = useState();
    return (
    <div className="flex gap-4 w-full justify-center items-center">
      <input
        placeholder="Digite uma missão"
        className="rounded-full pl-2 input-sm flex w-[70%]"
        onChange={(e)=> setTitle(e.target.value)}
      />

      <button className="rounded-full px-3 text-lg"
        onClick={() => props.saveAddQuest(title)}
      >
        +
      </button>
    </div>
  )

}
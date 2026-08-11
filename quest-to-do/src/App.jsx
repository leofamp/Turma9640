import { useState } from 'react'
import AddQuest from './components/AddQuest'

export default function App() {
  function save(title){
    console.log(title);
  }
return (
<div className="flex h-screen justify-center items-center"> 
  <div className="w-[80%] lg:w-[50%] h-[70%] shadow-md rounded-sm p-10"> 
    <h1 className="text-5xl font-bold text-center"> 
      Quest To Do 
    </h1>
    <AddQuest saveAddQuest={save}/> 
  </div> 
</div> 
)
}


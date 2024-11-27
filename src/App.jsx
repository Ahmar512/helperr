import { useState } from 'react'
import {sad, alone} from './constent/index.js'



function App() {
  const[para, setPara] = useState("Tell me what you are feelings.")

  const handleSad = () =>{
    let index = Math.floor(1000+Math.random()*1000)  % sad.length;
    console.log(index);
    setPara(sad[index]);

  }
  const handleAngery = () =>{

  }
  const handleLonely =()=>{
    let index = Math.floor(1000+Math.random()*1000)  % alone.length;
    setPara(alone[index]);

  }

  return (
    <div className='h-[100vh] w-[100%] bg-[url("./assets/bg.jpg")] bg-cover bg-center flex justify-center items-center'>
      <div className=' w-[100%]'>
        <p id='paragraph' className='text-4xl max-sm:text-2xl max-h-[30%] text-center'>{para}</p>
        <div className='flex flex-wrap w-full justify-center items-center mt-5 gap-3'>
          <button className='px-5 py-3 bg-red-400 rounded-xl border-black border-2 font-serif font-bold' onClick={handleSad}>Sad</button>
          
          <button className='px-5 py-3 bg-red-400 rounded-xl border-black border-2 font-serif font-bold' onClick={handleLonely}>Alone</button>
        </div>
      </div>

    </div>
  )
}

export default App

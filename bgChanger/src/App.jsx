import { useState } from 'react'


function App() {

  const [color , setColor] = useState('cyan')

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 py-1">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg 
        bg-white px-3 py-2 rounded-lg text-2xl"> Background Color Changer
       </div>
      </div>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg 
        bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{background: "yellow"}}
          >Yellow</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "pink"}}
          >Pink</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{background: "cyan"}}
          >Cyan</button>

          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "olive"}}
          >Olive</button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "orange"}}
          >Orange</button>

          <button
          onClick={() => setColor("#964B00")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "#964B00"}}
          >Brown</button>

          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "black"}}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App

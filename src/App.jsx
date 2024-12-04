import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-gradient-to-b from-green-400 to-blue-400 w-screen h-screen flex items-center justify-center">
      <div class= "bg-white w-[500px] h-[500px] items-start justify-start">
          <div class="flex items-center ">
            <img class="h-[80px] w-[80px]" src="./icons.png" alt="image description"/>
            <p class="font-bold font-mono">LibraryCore</p>
          </div>

        <p class="font-mono size-6 ml-5">Login</p>

        <input class="items-start ml-5" placeholder="username"/>

      </div>

    </div>
  )
}

export default App

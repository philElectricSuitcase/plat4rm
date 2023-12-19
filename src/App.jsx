import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import plat4rm from './assets/plat4rm.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={plat4rm} width="100%" />
       </div>
    </>
  )
}

export default App

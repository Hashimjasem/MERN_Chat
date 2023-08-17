import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './register'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-red-500'>
    <Register/>
   </div>
  )
}

export default App

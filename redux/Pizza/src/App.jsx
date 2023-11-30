import { useState } from 'react'
import './App.css'
import Pizza from './components/Pizza'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pizza/>
    </>
  )
}

export default App

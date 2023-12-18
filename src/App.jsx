import { useState } from 'react'
import './App.css'
import Tic from './comp/tic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tic />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <StudentCard />
      </div>
    </>
  )
}

export default App

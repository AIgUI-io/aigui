import { useState } from 'react'
import './App.css'
import { Explore } from './pages/Explore'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Explore></Explore>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Home/Hero'
import Headline from './componets/Home/Headline'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Headline/>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Home/Hero'
import Headline from './componets/Home/Headline'
import Content from './componets/Home/Content'
import WhatsApp from './componets/whatapp/Whatsapp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Content/>
      <WhatsApp/>
    </>
  )
}

export default App

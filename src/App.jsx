import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Home/Hero'
import Headline from './componets/Home/Headline'
import Content from './componets/Home/Content'
import WhatsApp from './componets/whatapp/Whatsapp'
import Service from './componets/Home/Service'
import Footer from './componets/Footer/Footer'
import Gallery from './componets/Gallery/Gallery'
import Home from './componets/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
        <div className="App">
          
          <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />

            

          </Routes>
        </div>
      </Router>       
    </>
  );
}

export default App;

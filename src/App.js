import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'
import Home from './Pages/Home'
import Survey from './Pages/Survey'
import Itinerary from './Pages/Itinerary'
import Navbar from './Pages/Navbar'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Survey' element={<Survey/>} />
        <Route path='/Itinerary' element={<Itinerary/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />

      </Routes>
    </Router>
  );
}

export default App;

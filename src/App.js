// import { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Homepage from './pages/Homepage/Homepage.js'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HotelDetails from './pages/HotelDetails/HotelDetails.js'
import PlaceDetails from './pages/PlaceDetails/PlaceDetails.js'

// axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.baseURL = "https://autocomplete29-d60ce98c5cd5.herokuapp.com"


function App() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if(!domLoaded) return null
  return (

    <>
      {domLoaded && <>
        <Header />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
        </Routes>

        <Footer />

      </>}


    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Coins from "./Components/Coin"
import Exchanges from "./Components/Exchange"
import CoinDetails from './Components/CoinDetails'


const App = () => {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Coins' element={<Coins />} />
        <Route path='/Exchanges' element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
    </>
  )
    
}

export default App

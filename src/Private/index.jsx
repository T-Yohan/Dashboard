import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Compte from './Compte'

const index = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Compte" element={<Compte/>} />
  </Routes>
  )
}

export default index
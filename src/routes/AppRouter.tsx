import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Shop from '../pages/Shop'

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      {/* Ruta pública de inicio de sesión */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
)

export default AppRouter
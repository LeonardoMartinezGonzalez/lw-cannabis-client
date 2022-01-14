import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import CrearCuenta from './components/auth/CrearCuenta';
import Productos from './components/productos/Productos';
import VerCarrito from './components/carrito/VerCarrito';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {
  
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Routes>
            <Route  path="/iniciar-sesion" element = {<Login/>} />
            <Route  path="/crear-cuenta" element = {<CrearCuenta/>} />
            <Route  path="/" element = {<Productos/>} />
            <Route  path="/ver-carrito" element = {<VerCarrito/>} />
          </Routes> 
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;

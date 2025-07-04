import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Autoservicio</Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/productos">Productos</Link>
        <Link to="/ventas">Ventas</Link>
        {user ? (
          // Usuario autenticado
          <div className="user-menu">
            <Link to="/users" className="nav-link">
              Usuarios Conectados
            </Link>
            <span className="username">Hola, {user.username}</span>
            <button onClick={handleLogout} className="btn-logout">
              Cerrar sesión
            </button>
          </div>
        ) : (
          // Usuario no autenticado
          <>
            <Link to="/login" className="nav-link">Iniciar sesión</Link>
            <Link to="/register" className="nav-link">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
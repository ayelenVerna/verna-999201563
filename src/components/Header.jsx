import { use, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";
import icono from "../assets/icono.jpg";


const Header = () => {
  
  const { logout, user } = useAuth();
  
  const stylesLogged = { background: "green" };
  const stylesGuest = { background: "orange" };

  
  return (
    <header style={user ? stylesLogged: stylesGuest}>
      <div>
        <img src={user ? icono : logo} />
        <h2>{user ? user.email: "invitado"}</h2>
      </div>
      <nav>
        <ul>
          {
            user && <li><Link to="/">Home</Link></li>
          }
          <li><Link to="/proyecto">Detalle del Proyecto</Link></li>

          {
            !user && <>
              <li><Link to="/registrarme">Registrarme</Link></li>
              <li><Link to="/login">Ingresar</Link></li>
            </>
          }
        </ul>
        {
          user && <button onClick={logout}>Cerrar sesión</button>
        }
      </nav>
      
    </header>
  )
}

export { Header }


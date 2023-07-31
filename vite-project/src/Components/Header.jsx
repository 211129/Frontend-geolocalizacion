import "../assets/Styles/header.css";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {
  const { authState, logout } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="inner-width">
          <a href="/" className="logo"></a>
          <p>GYA Geolocalizacion</p>
          <br></br>
          <button className="menu-toggler"></button>

          <div className="navbar-menu">
            <Link to="/">Home</Link>
            <Link to="/Mapa">Localizar</Link>
            {
            authState.isAuthenticated ? (
              <>
                <Link to="/login" onClick={logout}>
                  Logout
                </Link>
                
                <Link to="/statistics">Estadisticas</Link>
              </>
            ) : (
              <>              
              <Link to="/login">Login</Link>
              <Link to="/register">Registro</Link>
              </>
            )}
          </div>
        </div>
      </nav>{" "}
      <Outlet />
    </div>
  );
}

export default Header;

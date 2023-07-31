import '../assets/Styles/Nav.css';
import '../index.css'




import { Link, Outlet } from "react-router-dom";

function Navbar() {

  return (
    <div>

      <nav className="navbar">
        <div className="inner-width">
          <a href="/" className="logo"></a>
          <p >GYA GEOLOCALIZACION</p>
          <br></br>
          <button className="menu-toggler">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-menu">
            <Link to="/">Home</Link>
          </div>

        </div>
      </nav>

      <Outlet />



    </div>
  )
}

export default Navbar;
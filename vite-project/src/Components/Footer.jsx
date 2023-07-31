import punto from '../assets/Img/punto.png'
import '../assets/Styles/Footer.css'

function Footer() {

    return (

        <footer className="footer-distributed">

            <div className="footer-left">

                <img src={punto} alt="Logo" width="50" height="44" className="logo" />

                <p className="footer-links">

                    <a href="#">Términos y condiciones</a>

                </p>

                <p className="footer-company-name">Copyright © 2023 <strong>GYA Geolocalizacion</strong> Todos los derechos reservados</p>
            </div>

            <div className="footer-center">
                <div>
                    <p><span></span>
                        GYA GEOLOCALIZACION
                    </p>
                    <br></br>
                </div>

                <div>
                    <br></br>
                    <p>+52 961-190-71-83</p>
                </div>

                <div>
                    <br></br>
                    <p><a href="@gmail.com">Geolocalizaciongya@gmail.com</a></p>
                </div>


            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Acerca de la compañia</span>
                    <strong>GYA Geolocalizacion:</strong> Somos una empresa encargada a la seguridad de tu auto.</p>

            </div>
        </footer>



    )
}

export default Footer;
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <p>Email: ventas@sm.com</p>
                </div>
                <div className="footer-section copyright">
                    <p>&copy; 2026 SM. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
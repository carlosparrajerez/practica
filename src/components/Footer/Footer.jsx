import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section links">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contactanos</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <p>Email: ventas@pb.com</p>
                </div>
                <div className="footer-section copyright">
                    <p>&copy; 2026 PB. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
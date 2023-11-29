// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="navbar">
            <h1>Jérôme Basmaison <span>Développeur web</span> </h1>
            <nav className="navbar__nav">
                {/* <NavLink className="navbar__link" to="/">Accueil</NavLink>
                <NavLink className="navbar__link" to="/about">A propos</NavLink> */}
                <NavLink className="navbar__link" to="/">A propos de moi</NavLink>
                <NavLink className="navbar__link" to="/portfolio">Portfolio</NavLink>
                <NavLink className="navbar__link" to="/schooling">Formation</NavLink>
                <NavLink className="navbar__link" to="/skills">Compétences</NavLink>
                {/* <NavLink className="navbar__link" to="/about">Services</NavLink> */}
            </nav>  
        </header>
    )
}

export default Header

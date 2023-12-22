// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {showResponsive} from '../assets/showMenu.js'

function Header() {
    return (
        <header className="navbar" id="navbar">
            <h1>Jérôme Basmaison <span>Développeur web</span> </h1>
            {/* <nav className="navbar__burger" id="navbar__burger" onClick={showResponsive}><FontAwesomeIcon icon={faBars} size="2xl" /></nav> */}
            {/* <nav className="navbar__burger"><FontAwesomeIcon icon={faBars} size="2xl" /></nav> */}
            <nav className="navbar__nav" id="navbar__nav">
                {/* <NavLink className="navbar__link" to="/">Accueil</NavLink>
                <NavLink className="navbar__link" to="/about">A propos</NavLink> */}
                <NavLink className="navbar__link" to="/">A propos</NavLink>
                <NavLink className="navbar__link" to="/portfolio">Portfolio</NavLink>
                <NavLink className="navbar__link" to="/schooling">Formation</NavLink>
                <NavLink className="navbar__link" to="/skills">Compétences</NavLink>
                {/* <NavLink className="navbar__link" to="/about">Services</NavLink> */}
            </nav>  
        </header>
    )
}

export default Header

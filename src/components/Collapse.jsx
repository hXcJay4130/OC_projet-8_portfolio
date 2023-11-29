/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/collapse.scss'
import arrow from '../assets/collapseArrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import RatingSkills from '../components/RatingSkills'

function Collapse( {title, content}) {
    const [active, setActive] = useState('closed')
    const collapseType = (Array.isArray(content)) ? ("list") : ("text")
    // const collapseRating = (Array.isArray(content)) ? ("list") : ("text")
    function handleClick() {
        active === 'closed' ? setActive('open') : setActive('closed')
    }
    
    return (
        <section className="collapse">
            <div className="collapse__title">
                {/* <i className="fa-solid fa-address-card fa-lg" style="color: #24481a;"></i> */}
                {/* <FontAwesomeIcon icon={"faCoffee"} /> */}
                <div>
                    {/* <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> */}
                    {/* <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> */}
                    {/* <FontAwesomeIcon icon={['fas', {icon}]} /> */}
                    <h2>{title}</h2>
                </div>
                <img src={arrow} alt="" className = {`collapse__icon collapse__icon--${active}`} onClick={handleClick} />
            </div>
            
            <div className={`collapse__content--${active}`}>
                {collapseType === "list" ? (
                <ul>
                    {
                    content.map((item) => ( 
                        <li key={item.purpose} className = "collapse__item">
                           <div>{item.purpose}</div>
                           <RatingSkills scaleValue={item.grade} />
                        </li>
                    )
                    )}            
                </ul>
                ):(
                <div>
                   {
                    content.split('*').map((item) => ( 
                           <p key={item}>{item}</p>
                    )
                    )}  
                </div>
                )
            }

            </div>
        </section>
      );
}

export default Collapse

/* eslint-disable react/prop-types */
import '../styles/wrapper.scss'

function Wrapper({pixURL}) {

    return (
        <section className='wrapper' >
            <img className='wrapper__img' src={pixURL} alt='' />
        </section> 
    )
}

export default Wrapper
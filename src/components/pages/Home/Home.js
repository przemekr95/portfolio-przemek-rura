import React from 'react';
import '../../../css/Home.css'
import { Link } from 'react-scroll';



const Home = ()=>{

    
        return(
            <>
            <div className="home-wrapper" id="home">
                <div className="shadow"></div>
                <h1 className='animate__animated animate__backInDown'>Przemek Rura</h1>
                <p className='animate__animated animate__backInDown animate__delay-2s'>Frontend Developer</p>

                <Link className="animate__animated animate__bounce animate__infinite animate__delay-2s"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                        <i className="arrow fas fa-chevron-down"></i>
                </Link>
            </div>
            </>
        )
    
}

export default Home;
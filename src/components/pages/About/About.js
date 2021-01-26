import React from 'react';
import '../../../css/About.css'
import { Link } from 'react-router-dom';

const About = ()=>{
    return(
        <>
        <div className="about-wrapper">
            <div className="about">
                <div className="photo"></div>
                <div className="about-text">
                    <h2>Przemek <br/> Rura</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu massa pulvinar, viverra mauris vitae, vulputate augue. Ut neque massa, maximus sed neque sed, malesuada bibendum magna. Donec quis enim leo. Proin aliquet gravida purus, nec iaculis lacus. Nunc mattis malesuada iaculis. Quisque pharetra in lorem et cursus. Vestibulum eu.</p>
                </div>
            </div>
            <Link to="/portfolio">
                    <button>Portfolio</button>
            </Link>
        </div>
        </>
    )
}

export default About;
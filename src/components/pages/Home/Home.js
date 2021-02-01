import React from 'react';
import '../../../css/Home.css'
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';


const Home = ()=>{
    return(
        <>
        <div className="home-wrapper">
            <div className="shadow"></div>
            <h1 className='animate__animated animate__backInDown'>Przemek Rura</h1>
            <p className='animate__animated animate__backInDown animate__delay-2s'>Frontend Developer</p>
            <Link to="/about">
                <button className='animate__animated animate__backInDown animate__delay-2s'>About me</button>
            </Link>
        </div>
        <About/>
        <Portfolio/>
        <Contact/>

        </>
    )
}

export default Home;
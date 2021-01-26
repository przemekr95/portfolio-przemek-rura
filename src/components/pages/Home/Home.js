import React from 'react';
import '../../../css/Home.css'
import { Link } from 'react-router-dom';


const Home = ()=>{
    return(
        <>
        <div className="home-wrapper">
            <div className="shadow"></div>
            <h1>Przemek Rura</h1>
            <p>Frontend Developer</p>
            <Link to="/about">
                <button>About me</button>
            </Link>
        </div>
        </>
    )
}

export default Home;
import React from 'react';
import '../../../css/About.css'


class About extends React.Component {
    state ={
        title: 'About me',
        subtitle: 'Technologies'
    }



render(){


    return(
        <>
        <div className="about-wrapper">
            <h2 className="animate__animated animate__backInLeft">{this.state.title}</h2>
            <div className="about">
                <div className="photo"></div>
                <div className="about-text">
                    <h4 className="animate__animated animate__backInRight">Przemek</h4>
                    <h4 className="animate__animated animate__backInRight">Rura</h4>
                    <p className="animate__animated animate__backInRight">I am an aspiring frontend developer, currently living in Cracow. Looking for a job where I can expand my abilities.<br/>Few words about me: I graduated from AGH University of Science and Technology and also from Jagiellonian University. My other hobbies besides programming are photography and volleyball.<br/>Check out examples of my work.</p>
                </div>
            </div>
            <h3>{this.state.subtitle}</h3>
            <div className="technologies">
                <div className="row">
                    <li>
                        <i className="fab fa-js"></i>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-sass"></i>
                    </li>
                </div>
                <div className="row">
                <li>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-npm"></i>
                        <i className="fab fa-yarn"></i>
                    </li>
                </div>
            </div>
        </div>
        </>
    )
}}

export default About;
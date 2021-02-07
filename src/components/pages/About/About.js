import React from 'react';
import '../../../css/About.css';

const About = ()=>{

const skills1 = [
    {id:"js", class:"fab fa-js", delay:"500"},
    {id:"html", class:"fab fa-html5", delay:"300"},
    {id:"css", class:"fab fa-css3-alt", delay:"450"},
    {id:"sass", class:"fab fa-sass", delay:"550"}
]
const skills2 = [
    {id:"react", class:"fab fa-react", delay:"300"},
    {id:"github", class:"fab fa-github", delay:"550"},
    {id:"npm", class:"fab fa-npm", delay:"400"},
    {id:"yarn", class:"fab fa-yarn", delay:"500"}
]

const list1 = skills1.map(item => (
    <i 
        key={item.id} 
        className={item.class}
        data-aos="zoom-in" 
        data-aos-delay={item.delay}
        data-aos-duration="1200">
    </i>
))

const list2 = skills2.map(item => (
    <i 
        key={item.id} 
        className={item.class}
        data-aos="zoom-in" 
        data-aos-delay={item.delay}
        data-aos-duration="1200">
    </i>
))

    return( 
        <div className="about-wrapper" id="about">
            <h2 data-aos="fade-down" 
                data-aos-delay="100"
                data-aos-duration="1000">About me</h2>
            <div className="about">
                <div className="photo"
                    data-aos="fade-right" 
                    data-aos-delay="200"
                    data-aos-duration="1000"></div>
                <div className="about-text"
                    data-aos="fade-left" 
                    data-aos-delay="200"
                    data-aos-duration="1000">
                    <h4>Przemek</h4>
                    <h4>Rura</h4>
                    <p>I am an aspiring frontend developer, currently living in Cracow. Looking for a job where I can expand my abilities.<br/>Few words about me: I graduated from AGH University of Science and Technology and also from Jagiellonian University. My other hobbies besides programming are photography and volleyball.<br/>Check out examples of my work.</p>
                </div>
            </div>
            <h3 data-aos="fade-down" 
                data-aos-delay="100"
                data-aos-duration="1000">Technologies</h3>
            <div className="technologies">
                <div className="row">
                    <li>
                        {list1}
                    </li>
                </div>
                <div className="row">
                    <li>
                        {list2}
                    </li>
                </div>
            </div>
            <div className="triangle-box-about">
                <div className="triangle-left"></div>
                <div className="triangle-right"></div>
            </div>
        </div>
    )
}

export default About;
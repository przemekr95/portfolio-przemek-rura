import React from 'react';
import '../../../css/Portfolio.css'
import myNotes from './../../../images/portfolio/portfolio-test.jpg'

const projects = [
    {name: "ToDo", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo2", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo3", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo4", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo5", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo6", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo7", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo8", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"},
    {name: "ToDo9", img: myNotes, live: "https://przemekr95.github.io/searchEngine/" ,code: "https://github.com/przemekr95"}
]

const Portfolio = ()=>{

const list = projects.map(item => (
    <div className="portfolio-item" key={item.name}>
        <img src={item.img} alt="test"/>
        <h3>{item.name}</h3>   
        <div className="portfolio-btns">
            <a href={item.live} target="_blank" rel='noreferrer'>Live</a>
            <a href={item.code} target="_blank" rel='noreferrer'>Code</a>
        </div>
    </div>
))


    return(
        <h4>
         
        <div className="portfolio-wrapper">
            <h2>Portfolio</h2>
            <div className="portfolio">
                {list}
            </div>
        </div>
        </h4>
    )
}

export default Portfolio;
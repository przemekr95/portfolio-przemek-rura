import React from 'react';
import '../../../css/Portfolio.css'
import portfolio from './../../../images/portfolio/portfolio.jpg'
import wallet from './../../../images/portfolio/wallet.jpg'
import exchangeRateApp from './../../../images/portfolio/exchangeRateApp.jpg'
import billSplitter from './../../../images/portfolio/billSplitter.jpg'
import magic8Ball from './../../../images/portfolio/magic8Ball.jpg'
import stopwatch from './../../../images/portfolio/stopwatch.jpg'

const projects = [
    {name: "Portfolio website", img: portfolio, live: "https://przemekr95.github.io/portfolio-przemek-rura/" ,code: "https://github.com/przemekr95/portfolio-przemek-rura"},
    {name: "Stopwatch", img: stopwatch, live: "https://przemekr95.github.io/stopwatch/" ,code: "https://github.com/przemekr95/stopwatch/"},
    {name: "Exchange Rate App", img: exchangeRateApp, live: "https://przemekr95.github.io/exchangeRateApp/" ,code: "https://github.com/przemekr95/exchangeRateApp"},
    {name: "Magic 8ball", img: magic8Ball, live: "https://przemekr95.github.io/magic8Ball/" ,code: "https://github.com/przemekr95/magic8Ball"},
    {name: "Bill Splitter", img: billSplitter, live: "https://przemekr95.github.io/billSplitter/" ,code: "https://github.com/przemekr95/billSplitter"},
    {name: "Wallet", img: wallet, live: "https://przemekr95.github.io/wallet/" ,code: "https://github.com/przemekr95/wallet"}
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
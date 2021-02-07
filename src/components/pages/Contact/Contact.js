import React from 'react';
import '../../../css/Contact.css';
import codewars from './../../../images/codewars.png'
import linkedin from './../../../images/linkedin.png'
import github from './../../../images/github.png'

class Contact extends React.Component {
    state ={
        username: '',
        email: '',
        subject: '',
        message: ''
    }



    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    clearBtn = (e) => {
        e.preventDefault()
        const username = document.querySelector('#username');
        const email = document.querySelector('#email');
        const subject = document.querySelector('#subject');
        const message = document.querySelector('#message');
        [username, email, subject, message].forEach(el =>{
            el.value ='';
            this.clearError(el);
        })
        this.setState({
            username: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    sendBtn = (e) => {
        e.preventDefault()
        const username = document.querySelector('#username');
        const email = document.querySelector('#email');
        const subject = document.querySelector('#subject');
        const message = document.querySelector('#message');
        this.checkForm([username, email, subject, message])
        this.checkMail(email)
        this.checkErrors()
    }
    
    checkForm = (input) =>{
        input.forEach(el => {
            if(el.value===''){
                this.showError(el);
            }else {
                this.clearError(el);
            }
        });
    }

    showError = (input) => {
        const formBox = input.parentElement;
        formBox.classList.add('error')
    }

    clearError = (input) => {
        const formBox = input.parentElement;
        formBox.classList.remove('error')
    }

    checkMail = email => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(re.test(email.value)){
            this.clearError(email)
        } else {
            this.showError(email)
        }
    }

    checkErrors = () => {
        const allInputs = document.querySelectorAll('.form-box');
        let errorCount = 0;
        
        allInputs.forEach(el => {
            if(el.classList.contains('error')){
                errorCount++;
            }
        })
            if(errorCount === 0) {
                const popup = document.querySelector('.popup')
                popup.classList.add('show-popup')
            } 
        
    }

    closeBtn = (e) => {
        e.preventDefault()
        const popup = document.querySelector('.popup')
        popup.classList.remove('show-popup')
        this.setState({
            username: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    render(){
        
        const link = [
            {name: "LinkedIn", img: linkedin, link: "https://www.linkedin.com/in/przemekrura/" ,alt: "LinkedIn's logo"},
            {name: "GitHub", img: github, link: "https://github.com/przemekr95" ,alt: "GitHub's logo"},
            {name: "CodeWars", img: codewars, link: "https://www.codewars.com/users/przemekr95" ,alt: "CodeWars's logo"}
        ]

        const links =link.map(item => (
            <a href={item.link} target="_blank" rel='noreferrer' key={item.name}>
                <img src={item.img} alt={item.alt}/>
                <span>{item.name}</span>
            </a>
        ))


    return(
        
        <div className="contact-wrapper" id="contact">
            <h2>Contact</h2>
            <div className="contact">
                <div className="contact-form-box">
                    <h5>Have a question or want to work together?</h5>
                    <form className="contact-form">
                        <div className="form-box">
                            <label htmlFor="username">Name:</label>
                            <input id="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                            <p className="error-text">Fill in correctly</p>
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" value={this.state.email} onChange={this.handleChange} />
                            <p className="error-text">Fill in correctly</p>
                        </div>
                        <div className="form-box">
                            <label htmlFor="subject">Subject:</label>
                            <input id="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
                            <p className="error-text">Fill in correctly</p>
                        </div>
                        <div className="form-box">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" value={this.state.message} onChange={this.handleChange} />
                            <p className="error-text">Fill in correctly</p>
                        </div>
                        <div className="control-buttons">
                            <div className="popup">
                                <p>Message send!</p>
                                <button onClick={this.closeBtn}>Close</button>
                            </div>
                            <div className="buttons">
                                <button  onClick={this.clearBtn}>Reset</button>
                                <button  onClick={this.sendBtn}>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-icons">
                    <h5>Find me on:</h5>
                    <div className="icons">
                        {links}
                    </div>
                </div>
            </div>
            <footer>© 2021 Przemek Rura</footer>
        </div>
    )
}
}

export default Contact;
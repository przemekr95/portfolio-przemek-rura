import React from 'react';
import '../../../css/Contact.css';

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
        
    return(
        
        <div className="contact-wrapper">
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
                            <button className="close" onClick={this.closeBtn}>Close</button>
                        </div>
                            <button className="clear" onClick={this.clearBtn}>Wyczyść</button>
                            <button className="send" onClick={this.sendBtn}>Wyślij</button>
                        </div>


                    </form>






                </div>
                <div className="contact-icons">
                    <h5>Find me on:</h5>
                
                </div>
            </div>
        </div>
        
    )
}
}

export default Contact;
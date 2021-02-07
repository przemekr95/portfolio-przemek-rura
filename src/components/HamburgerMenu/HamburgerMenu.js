import React from 'react';
import '../../css/HamburgerMenu.css';
import { Link } from 'react-scroll';

class HamburgerMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checkbox: false
        }
}


toggleMenu (){
    const currentCheckbox = this.state.checkbox; 
    this.setState({
        checkbox: !currentCheckbox
    });
}

render(){
    const navItems = [
        {name: "Home", link: "home"},
        {name: "About", link: "about"},
        {name: "Portfolio", link: "portfolio"},
        {name: "Contact", link: "contact"}
    ]
    
    const nav = navItems.map(item => (
        <li key={item.name}>
        <Link className="nav-item" onClick={()=>this.toggleMenu()}
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            >{item.name}
        </Link>
    </li>    
    ))


    

    return (
        <>
            <div className="menu-wrapper">
                <input type="checkbox" checked={this.state.checkbox} onChange={()=>this.toggleMenu()} className="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div onClick={()=>this.toggleMenu()}>
                        <div>
                            <ul>
                                {nav}           
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>     
    );
};
}

export default HamburgerMenu;

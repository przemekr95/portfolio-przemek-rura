import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/HamburgerMenu.css';

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

    return (
        <>
            <div className="menu-wrapper">
                <input type="checkbox" checked={this.state.checkbox} onChange={()=>this.toggleMenu()} className="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div onClick={()=>this.toggleMenu()}>
                        <div>
                            <ul>
                                <li>
                                    <NavLink className="nav-item" to='/'>Home</NavLink> 
                                </li>
                                <li>
                                    <NavLink className="nav-item" to='/about'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-item" to='/portfolio'>Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-item" to='/contact'>Contact</NavLink>
                                </li>
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

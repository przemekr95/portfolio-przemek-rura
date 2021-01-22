import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/HamburgerMenu.css';

class HamburgerMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuOpen: false,
            navOpen: false,
        }
}


toggleMenu (){
    const currentStateMenu = this.state.menuOpen;
    const currentStateNav = this.state.navOpen;    
    this.setState({
        menuOpen: !currentStateMenu,
        navOpen: !currentStateNav
    });
}

render(){

    return (
        <>
            <label onClick={()=>this.toggleMenu()} htmlFor="navi-toggle">
                <i className="fas fa-hamburger"></i>
            </label>

            <div className={this.state.menuOpen ? 'toggle-menu nav-background' : 'nav-background'}></div>
            
            <nav className={this.state.menuOpen ? 'toggle-nav' : null} onClick={()=>this.toggleMenu()}>
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
            </nav>
        </>     
    );
};
}

export default HamburgerMenu;

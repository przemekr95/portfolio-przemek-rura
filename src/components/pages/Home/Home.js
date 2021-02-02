import React from 'react';
import '../../../css/Home.css'


class Home extends React.Component {
    state ={
        name: 'Przemek Rura',
        text: 'Frontend Developer'
    }



    render(){
        return(
            <>
            <div className="home-wrapper">
                <div className="shadow"></div>
                <h1 className='animate__animated animate__backInDown'>{this.state.name}</h1>
                <p className='animate__animated animate__backInDown animate__delay-2s'>{this.state.text}</p>
            </div>
            </>
        )
    }
}

export default Home;
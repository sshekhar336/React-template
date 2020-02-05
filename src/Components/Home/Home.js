import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <div className="homepage">
            <div className="header">
                <div className="menu">
                    <div className="sandwich"></div>
                    <div className="sandwich2"></div>
                    <div className="sandwich"></div>
                </div>
                <div className="logoname">Basement</div>
                <div>
                    <div className="connections">
                        <img className="contacticon" src={require('../../Images/twitter.png')} />
                        <img className="contacticon" src={require('../../Images/facebook.png')} />
                        <img className="contacticon" src={require('../../Images/instagram.png')} />
                    </div>
                </div>
            </div>
            <div className='topText'>
                <h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </h2>
                <button className="scrollDown">
                    Scroll down
                </button>
            </div>

        </div>
    )
}

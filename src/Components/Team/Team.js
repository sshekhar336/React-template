import React from 'react';
import './Team.css';
// import SatyaNadela from '../../Images/SatyaNadela';

export default function Team() {
    return (
        <div className="team">
            <div style={{padding: "5px"}}>Our team</div>
            <div className="teamdetails">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </div>
            <div className="images">
                <div className="eachImage">
                    <img className="teamImage" src={require('../../Images/SatyaNadela.jpg')} alt="SatyaNadela" />
                    <p>Satya Nadela</p>
                </div>
                <div className="eachImage">
                    <img className="teamImage" src={require('../../Images/RatanTata.jpg')} alt="SatyaNadela" />
                    <p>Ratan Tata</p>
                </div>
                <div className="eachImage">
                    <img className="teamImage" src={require('../../Images/SundarPichai.jpg')} alt="SatyaNadela" />
                    <p>Sundar Pichai</p>
                </div>
            </div>
            <div style={{padding: "5px"}}>Our clients</div>
            <div className="teamdetails">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing
            </div>
        </div>
    )
}

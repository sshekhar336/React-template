import React from 'react';
import './Studio.css';

export default function Studio() {
    return (
        <div className="studio" id="studiopage">
            <div>
                <div>
                    <img className="office1" src={require('../../Images/office1.jpg')} />
                    <img className="office2" src={require('../../Images/office2.jpg')} />
                    <img className="office3" src={require('../../Images/office3.jpg')} />
                </div>
            </div>
            <div className="contact">
                <div>
                    <p>Our studio</p>
                    <p className="underline"></p>
                    <p>Address Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div>
                    <p>Contact</p>
                    <p className="underline"></p>
                    <p>conatct number  Lorem Ipsum </p>
                </div>
            </div>
        </div>
    )
}

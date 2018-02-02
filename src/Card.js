import React from 'react';

const Card = () => {
    return(
        <div className = 'bg-ight-green dib br3 pr3 ma2 grow'>
            <img src="https://robohash.org/batman?200x200" alt="roboots"/>
            <div>
                <h2>Jane Doe</h2>
                <p>JaneDoe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;
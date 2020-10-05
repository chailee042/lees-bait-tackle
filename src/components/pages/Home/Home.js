import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <div className="home-container image">
                <h1>Another Fishing Adventure</h1>
                <p>Check out new fishing tackle!</p>
                    <button className="button">
                        <a 
                            rel="noopener noreferrer" 
                            href="https://www.tacklewarehouse.com/newitems.html" 
                            target="_blank" 
                        >
                            Shop Now
                        </a>
                    </button>
            </div>
        </>
    );
}

export default Home;

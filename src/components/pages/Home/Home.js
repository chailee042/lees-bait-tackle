import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home-container image">
                <h1>Another Fishing Adventure</h1>
                <p>Check out fishing tackle!</p>
                <Link to="/products">
                    <button className="button">
                        Shop Now
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Home;

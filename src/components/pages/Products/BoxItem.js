import React from 'react';
import './BoxItem.css';
import { Link } from 'react-router-dom';


function BoxItem(props) {
    return (
        <>
            <li className="box-item">
                <div className="box-border">
                    <div className="image-wrap">
                        <Link 
                            to={props.to}
                        >
                        <img 
                            src={props.src} 
                            alt="tackle"
                            className="box-image-item"
                        />
                        </Link>
                    </div>
                    <div className="box-text-wrap">
                        <Link 
                            to={props.to}
                            className="box-text-item"
                        >
                            {props.text}
                        </Link>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BoxItem;

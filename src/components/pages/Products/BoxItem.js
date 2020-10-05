import React from 'react';
import './BoxItem.css';

function BoxItem(props) {
    return (
        <>
            <li className="box-item">
                <div className="box-border">
                    <div className="image-wrap">
                        <a 
                            href={props.href} 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                        <img 
                            src={props.src} 
                            alt="tackle"
                            className="box-image-item"
                        />
                        </a>
                    </div>
                    <div className="box-text-wrap">
                        <a 
                            href={props.href} 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className="box-text-item"
                        >
                            {props.text}
                        </a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BoxItem;

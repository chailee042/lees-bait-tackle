import React from 'react';
import BoxItem from './BoxItem';
import './ProductsContent.css';


function ProductsContent() {
    return (
        <div className="products">
            <h1>Tackle Selection</h1>
            <div className="products-container"> 
                <div className="products-wrapper">
                    <ul className="products-item">
                        <BoxItem 
                            src="image/soft-baits.jpg"
                            to="/softbaits"
                            text="Soft Baits"
                        />
                        <BoxItem 
                            src="image/hard-baits.jpg" 
                            to="/hardbaits" 
                            text="Hard Baits"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/swim-baits.jpg" 
                            to="/swimbaits" 
                            text="Swim Baits"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/bass-jigs.jpg" 
                            to="/jigs" 
                            text="Jigs"  
                        />
                        <BoxItem 
                            src="image/frog.jpg" 
                            to="/frogs" 
                            text="Frogs"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/spinner-baits.jpg" 
                            to="/spinnerbaits" 
                            text="Spinner Baits"  
                        />
                        <BoxItem 
                            src="image/buzz-baits.jpg" 
                            to="/buzzbaits" 
                            text="Buzz Baits"  
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductsContent;

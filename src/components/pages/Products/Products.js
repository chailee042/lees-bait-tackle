import React from 'react';
import BoxItem from './BoxItem';
import './Products.css';

function Products() {
    return (
        <div className="products">
            <h1>Tackle Selection</h1>
            <div className="products-container"> 
                <div className="products-wrapper">
                    <ul className="products-item">
                        <BoxItem 
                            src="image/soft-baits.jpg" 
                            href="https://www.tacklewarehouse.com/brandsoftbaits.html" 
                            text="Soft Baits"  
                        />
                        <BoxItem 
                            src="image/hard-baits.jpg" 
                            href="https://www.tacklewarehouse.com/brandhardbaits.html" 
                            text="Hard Baits"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/swim-baits.jpg" 
                            href="https://www.tacklewarehouse.com/brandswimbaits.html" 
                            text="Swim Baits"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/bass-jigs.jpg" 
                            href="https://www.tacklewarehouse.com/brandjigs.html" 
                            text="Jigs"  
                        />
                        <BoxItem 
                            src="image/frog.jpg" 
                            href="https://www.tacklewarehouse.com/Frog_Fishing/catpage-FROGS.html" 
                            text="Frogs"  
                        />
                    </ul>
                    <ul className="products-item">
                        <BoxItem 
                            src="image/spinner-baits.jpg" 
                            href="https://www.tacklewarehouse.com/spinnerbaits.html" 
                            text="Spinner Baits"  
                        />
                        <BoxItem 
                            src="image/buzz-baits.jpg" 
                            href="https://www.tacklewarehouse.com/buzzbaits.html" 
                            text="Buzz Baits"  
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;

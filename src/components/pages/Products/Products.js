import React from 'react';
import ProductsContent from './ProductsContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SoftBaits from './pages/SoftBaits/SoftBaits';
import HardBaits from './pages/HardBaits/HardBaits';
import BuzzBaits from './pages/BuzzBaits/BuzzBaits';
import Frogs from './pages/Frogs/Frogs';
import Jigs from './pages/Jigs/Jigs';
import SpinnerBaits from './pages/SpinnerBaits/SpinnerBaits';
import SwimBaits from './pages/SwimBaits/SwimBaits';

function Products() {
    return (
        <Router>
            <Switch>
                <Route path="/softbaits" component={SoftBaits} />
                <Route path="/hardbaits" component={HardBaits} />
                <Route path="/buzzbaits" component={BuzzBaits} />
                <Route path="/frogs" component={Frogs} />
                <Route path="/jigs" component={Jigs} />
                <Route path="/spinnerbaits" component={SpinnerBaits} />
                <Route path="/swimbaits" component={SwimBaits} />
                <ProductsContent />
            </Switch>
        </Router>
    );
}

export default Products;

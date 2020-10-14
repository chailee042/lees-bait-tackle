import React from 'react'
import { Grid } from '@material-ui/core';
import ContentFrogs from './ContentFrogs';


function Frogs() {
    return (
        <Grid container direction="column" style={{padding: '50px'}}>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                    <h1 style={{textAlign: 'center', fontSize: '3.5rem', color: 'orangered', margin: '30px'}}>Frogs</h1>
                        <ContentFrogs />
                    </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    );
};

export default Frogs;
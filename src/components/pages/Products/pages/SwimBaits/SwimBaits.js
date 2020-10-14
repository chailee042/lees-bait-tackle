import React from 'react'
import { Grid } from '@material-ui/core';
import ContentSwimBaits from './ContentSwimBaits';

function SwimBaits() {
    return (
        <Grid container direction="column" style={{padding: '50px'}}>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                    <h1 style={{textAlign: 'center', fontSize: '3.5rem', color: 'orangered', margin: '30px'}}>Swim Baits</h1>
                        <ContentSwimBaits />
                    </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    );
};

export default SwimBaits;
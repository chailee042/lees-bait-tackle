import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';

function SoftBaits() {
    return (
        <Grid container direction="column" style={{padding: '50px'}}>
            <Grid item container>
                {/* The bottom line creates padding for container on left and right side */}
                <Grid item xs={false} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <h1 style={{textAlign: 'center', fontSize: '3.5rem', color: 'orangered', margin: '30px'}}>Soft Baits</h1>
                    <Content />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    );
};

export default SoftBaits;

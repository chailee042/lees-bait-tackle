import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BuzzBaitsCard from './BuzzBaitsCard';

const useStyles = makeStyles({
    head2: {
        textAlign: 'center',
        fontSize: '2rem',
        paddingTop: '30px',
        margin:'15px',
        borderBottom: '2px solid orangered'
    },
});

function ContentBuzzBaits() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Single Prop Buzz Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="Baksyn Lure"
                        subtitle="$20.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BAKBUZZ-002-1.jpg"
                        description="Crafted by the world-renowned “wire bait king” and Japanese native, Naoaki Fujimoto, the Baksyn Lure Designs Right Rotation Buzzbait combines unrivaled quality and application specific design into one compact package." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="Booyah"
                        subtitle="$4.69"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BYB-CTS-1.jpg"
                        description="The Booyah Buzz is made with premium hard coat paint, extra large 3D red eyes and flared red gills, the Booyah Buzz planes quickly and runs true out of the package. The Booyah clacker really attacks the blade and the 55-strand Bio-Flex silicone skirt and a 5/0 Mustad Ultra Point hook do the rest." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="Jenko"
                        subtitle="$9.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=JOFFB-BBB-1.jpg"
                        description="Built with a unique spring design, the Jenko Fishing Offspring Buzzbait delivers improved casting distance and a sound unlike any other buzzbait on the market. The Jenko Fishing Offspring Buzzbait’s innovative spring design protrudes upward from the head and stops the blade from turning during flight to increase casting distance." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Double Prop Buzz Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="Accent"
                        subtitle="$7.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ACCDBB-BKB-SIL-1.jpg"
                        description="Providing superior buoyancy and serious attraction, the Accent Fishing B2 Double Buzzbaits call bass to the surface with a double-propped presentation that means business. Built with two counter-rotating buzz blades, the Accent Fishing B2 Double Buzzbaits sputter and splash with tremendous force and plenty of lift." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="GreenFish"
                        subtitle="$6.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=GFSB-BLG-1.jpg"
                        description="Fast or slow, the Greenfish Tackle Shark Buzzbait With Floats tempts bass at the surface with a heavy concentration of splash, flash, and gurgling attraction. Built to get on plane quickly and easily, the Greenfish Tackle Shark Buzzbait With Floats features two foam floats that keep it on the surface, even at a deathly slow retrieve." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <BuzzBaitsCard 
                        title="Persuader"
                        subtitle="$9.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=PDB-CH-1.jpg"
                        description="Known throughout the West Coast for their tournament-caliber performance, the Persuader Double Buzzer Buzzbaits deliver double the flash, noise, and fish attracting ability of your everyday single buzz bait. Built with the finest components available, the Persuader Double Buzzer Buzzbaits feature two side by side counter rotating blades for straight tracking and the potential for even slower retrieves and more agitation and noise at any speed." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentBuzzBaits;



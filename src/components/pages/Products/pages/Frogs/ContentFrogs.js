import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FrogsCard from './FrogsCard';

const useStyles = makeStyles({
    head2: {
        textAlign: 'center',
        fontSize: '2rem',
        paddingTop: '30px',
        margin:'15px',
        borderBottom: '2px solid orangered'
    },
});

function ContentFrogs() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Soft body Frogs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Big Bite"
                        subtitle="$3.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BBTOPTD-BL-1.jpg"
                        description="The Big Bite Baits Top Toad features a soft yet durable construction proven to stand up to the repeated abuse of hungry bass. Its anatomically accurate toad profile and specially designed legs that generate a killer buzzing action combine to call bass up from beneath thick vegetation." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Bruiser"
                        subtitle="$3.69"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BBKF-BBB-1.jpg"
                        description="Throw the Bruiser Baits Kickin' Frog overtop of any cover, along edges, or in open water, its profile and specially designed legs deliver a unique surface disturbance that bass have trouble resisting." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Lake Fork"
                        subtitle="$5.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=LKFKFRG-BN-1.jpg"
                        description="Blending elements of design from multiple lures, the Phenix Proline Stand Up Casting Wobble Jigs provide a unique bladed presentation that is as functional as it is attractive." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Hollow body Frogs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="13 Fishing"
                        subtitle="$12.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=TRWF-ALB-1.jpg"
                        description="Get into the slop and catch the biggest fish with the 13 Fishing Trash Panda Frog. Boasting a classic hollow body design, the 13 Fishing Trash Panda Frog features a completely weedless construction that can be worked through the thickest and nastiest cover where most lures are ineffective." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="6th Sense"
                        subtitle="$12.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SSHBF-BFG-1.jpg"
                        description="The long awaited 6th Sense Vega Hollow Body Frog is finally here and ready to sashay across matted vegetation, and even excels in open water. Designed with a slender, keeled shape, the 6th Sense Vega Hollow Body Frog walks with ease and dares big bass to strike." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Backstabber"
                        subtitle="$7.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BSFR-MYL-1.jpg"
                        description="If you like frog fishing, the Backstabber Frog has you covered for anything from open water to heavy vegetation.  Crafted with a classic hollow body design, the Backstabber Frog will never sink, no matter what you throw it into." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Castaic"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=CBF-GF-1.jpg"
                        description="Terrorize the tops of mats with one of the most animated amphibians on the market – the Castaic Baits Walking Frog. Designed with a special “bass boat” belly, the Castaic Baits Walking Frog produces a tantalizing side-to-side walking action that turns bass’ attention towards the surface." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="Googan"
                        subtitle="$8.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=GSFR-BFG-1.jpg"
                        description="The Googan Squad Filthy Hollow Body Filthy Frog is a 100% weedless hollow bodied frog that is designed to catch big bass in the thickest and filthiest of slop. Built with a heavier internal weight than most frogs on the market for extremely long and pinpoint accurate casts, the Googan Squad Filthy Hollow Body Filthy Frog features a narrow body shape with a pointed nose, which presents a perfect frog profile from below and allows it to slip through dense cover without any muck building up on the front." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FrogsCard 
                        title="LIVETARGET"
                        subtitle="$11.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=KLTHBFG-BGR-1.jpg"
                        description="Winner of the 2010 ICAST - Best Soft Lure Award - the Livetarget Hollow Body Frog is one of the most detailed and realistic frog baits to ever hit the market. Anatomically correct with unprecedented detailing, it sits in the water on the pause just like a real frog - tempting bass from below." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentFrogs;



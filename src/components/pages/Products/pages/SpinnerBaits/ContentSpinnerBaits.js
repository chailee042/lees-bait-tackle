import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpinnerBaitsCard from './SpinnerBaitsCard';

const useStyles = makeStyles({
    head2: {
        textAlign: 'center',
        fontSize: '2rem',
        paddingTop: '30px',
        margin:'15px',
        borderBottom: '2px solid orangered'
    },
});

function ContentSpinnerBaits() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Single Blade Spinners</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Zorro"
                        subtitle="$6.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZROLRSP-BKB-CG-1.jpg"
                        description="The bait that won the first Bassmaster Classic in 1971 on Lake Meade, the Zorro Baits Aggravator Spinnerbait with a Single Colorado blade configuration is a classic that just keeps catching fish.  Its single Colorado blade makes it one of the most vibrating spinnerbaits around, giving off a tremendous thumping action." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="4x4"
                        subtitle="$6.29"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=4X4NSB-TS14-1.jpg"
                        description="Next time you decide to hit the lake under moonlight, make sure you have the right tackle to make your excursion worthwhile – the 4x4 Nighttime Spinnerbait. Quite possibly one of the best nighttime spinnerbaits on the market, the 4x4 Nighttime Spinnerbait is built using premium Sampo swivels, a dazzling #6 Colorado blade, and a custom built head." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Booyah"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BYBSC-WCH-1.jpg"
                        description="Made to produce a heavy thump that bass can feel, the Booyah Blade Single Colorado Spinnerbaits deliver a hard-pounding attraction that excels in low visibility. Whether you’re fishing muddy waters or at night, the Booyah Blade Single Colorado Spinnerbait is fitted with a jeweler’s-grade Colorado blade and .037 stainless steel wire that generates a strike-inducing pulsation." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Double Blade Spinners</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Zorro"
                        subtitle="$6.79"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZORSPIN-BSF-DSS-1.jpg"
                        description="The bait that won the first Bassmaster Classic in 1971 on Lake Meade, the Zorro Baits Aggravator Spinnerbait with a Double Willow blade configuration is a classic that just keeps catching fish.  Its double willow blades give off tons of flash, and its premium skirts and realistic head design only adds to its effectiveness." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Accent"
                        subtitle="$7.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=AJW-BG-DKG-1.jpg"
                        description="Designed by Jacob Wheeler, the youngest angler ever to win the Forrest Wood Cup, the Accent J. Wheeler Custom Double Willow Spinnerbaits are a part of the spinnerbait series Wheeler utilized to secure a sound victory at the 2020 MLF season opener at Lake Eufala." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Baksyn lure"
                        subtitle="$20.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BAKSPIN-001-1.jpg"
                        description="The brainchild of Japanese lure maker, Naoaki Fujimoto, the Baksyn Lure Designs Speed Star Finesse Spinnerbait marries decades of design experience with the finest components available. Utilizing a precisely crafted, concave head shape, the Baksyn Lure Designs Speed Star Finesse Spinnerbait offers increased stability and is able to maintain a running depth, even at high speeds, making it easy to burn without washing out." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Blade Runner"
                        subtitle="$11.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BRDBSPB-AYU-TWL-1.jpg"
                        description="The beefy Blade-Runner 1.5oz Spinnerbait is built with professional-grade components and a large profile perfect for attracting extra-large bass. The Blade-Runner 1.5oz Spinnerbait features two luminous willow blades, a Mustad Ultra-Point hook, top-notch barrel swivels, and heavy gauge .51 Muskie wire Proven effective in a wide-range of conditions, the Blade-Runner 1.5oz Spinnerbait’s considerable presence is detectable." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Booyah"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BYCSW-662-1.jpg"
                        description="Unlike any other spinnerbait on the market, the Booyah Counter Strike Double Willow Spinnerbaits employ a patented counter-rotating blade configuration that enhances flash, vibration, and performance. Fitted with two jewelry-grade willow blades, the unique design of the Booyah Counter Strike Double Willow Spinnerbaits allows one blade to spin clockwise while the other blade spins counter-clockwise, creating a signature blend of flash and vibration." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SpinnerBaitsCard 
                        title="Dobyns"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ADV-A04-CWN-1.jpg"
                        description="Designed by West Coast tournament fishing legend, Gary Dobyns, the Dobyns D-Blade Advantage Series Spinnerbaits will give you proven tournament winning performance and a competitive edge against your opponents. The Advantage Series Spinnerbaits feature a custom head design, which keeps them perfectly balanced and running straight at any retrieve speed, as well as, prevents the skirts from balling up on one side after a fish strikes or coming through cover." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentSpinnerBaits;



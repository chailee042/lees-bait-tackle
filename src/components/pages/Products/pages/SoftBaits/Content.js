import { Grid } from '@material-ui/core';
import React from 'react';
import SoftBaitsCard from './SoftBaitsCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    head2: {
        textAlign: 'center',
        fontSize: '2rem',
        paddingTop: '30px',
        margin:'15px',
        borderBottom: '2px solid orangered'
    },
});

function Content() {
    const classes = useStyles();

    return (
        <>
            <h2 className={classes.head2}> Drop Shots</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Zoom"
                        subtitle="$5.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZMBD-308-1.jpg"
                        description="Put a beatdown on the fish and the competition with the Zoom Beatdown Worm. Made from Zoom’s legendary soft plastic formula, the Zoom Beatdown Worm gives a whole new meaning to the phrase, “small, but powerful.” Perfect for a ned rig, neko rig, wacky rig, drop shot, or even a small shaky head, the Zoom Beatdown Worm has no limits and its straight tail design produces a very subtle quivering action that fish simply can’t resist."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Big Bite"
                        subtitle="$3.49" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BBBSHSQ-AYU-1.jpg"
                        description="Designed with the help of Bassmaster Elite Series veteran pro, Jeff Kreit, the Big Bite Baits Jeff Kriet Shaking Squirrel is part of Kreit's signature series of baits. Manufactured out of a softer plastic formula."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Roboworm"
                        subtitle="$3.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=RFST-PMD-1.jpg"
                        description="The Roboworm Fat Straight Tail Worm brings you the classic soft plastic worm shape with the clean colors and hand-poured quality you are used to getting from Roboworm - the Country's premier plastic worm company."
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}>Worm plastics</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Strike King"
                        subtitle="$6.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SKPPKVD-BFK-1.jpg"
                        description=" Bull Worm 8 Inch Soft Plastic Worm. Great for drop-shot and texas rig."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Berkley"
                        subtitle="$4.49" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BPBE-BK-1.jpg"
                        description=" Fishing Soft Bait, Sizes, and Shapes. Larger surface area holds more irresistible Power Bait flavor and scent."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Zoom"
                        subtitle="$3.49" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZFW-BB-1.jpg"
                        description=" U Tail Worm-Pack of 20."
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}>Craw plastics</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="YUM"
                        subtitle="$2.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=YCP-BBS-1.jpg"
                        description=" Chrsitie Craw Soft Plastic Bait Fishing Lure - Great for Flipping and Pitching and as a Jig Trailer, 3.5 Inch Length, 8 per Pack."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Strike King"
                        subtitle="$7.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SKRCR-AGB-1.jpg"
                        description=" Rage Tail Bug Lure. FEATURING. Strike King's revolutionary Rage Tail technology, this soft plastic bait displays excellent action in the water."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="NetBait"
                        subtitle="$3.99" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=NBPC-AC-1.jpg"
                        description="Soft Plastic Crawfish Lure Hollow Body Bass Fishing Plastic Bait. An extremely versatile bait with the patented NetBait claws and hollow body design."
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}>Lizard plastics</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Berkley"
                        subtitle="$3.19" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=CLZ-CHPE-1.jpg"
                        description=" PowerBait Fishing Soft Bait, Sizes, and Shapes."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="Zoom"
                        subtitle="$4.49" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=Z6L-BK-1.jpg"
                        description="  Mini Lizard Bait-Pack of 15. Slender bodied lizard. Features free-moving legs and curly tail. Salt-impregnated"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SoftBaitsCard 
                        title="YUM"
                        subtitle="$6.98" 
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=YLZD-CPC-1.jpg"
                        description=" Lizard Ultimate Finesse Lizard Soft Plastic Swim-Bait Bass Fishing Lure with Curly Legs and Tail."
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Content;



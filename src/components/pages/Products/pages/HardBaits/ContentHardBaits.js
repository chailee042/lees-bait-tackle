import { Grid } from '@material-ui/core';
import React from 'react';
import HardBaitsCard from './HardBaitsCard';
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

function ContentHardBaits() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Jerk Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Strike King"
                        subtitle="$8.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SKKVDJB-467-1.jpg"
                        description="KVD Jerkbait 3 Hook. Suspending lure that attracts bass. Dives 5 to 8 feet deep." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Lunkerhunt"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=LHIJ-GDN-1.jpg"
                        description=" Impact Distress 6F Jerkbait – Hard Bait Fishing Lure, Weighs ½ oz, 3.5” Length." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Yo-Zuri"
                        subtitle="$9.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=YZ3J-PAY-1.jpg"
                        description="3DB Jerkbait Suspending Lure. Baitfish profile to imitate a variety of forage. Suspending for jerk bait technique. Mylar Tail hook for Flash and Lifelike Fin" 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Crank Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Bomber Lures"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=EXFFS-CS-1.jpg"
                        description="Fat Free Shad Crankbait Bass Fishing Lure. Cranking depth of 4-6 feet." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Bandit"
                        subtitle="$2.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=BCB-01-1.jpg"
                        description="Crankbait Series 100, 200, and 300 Bass Fishing Lures." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="6th Sense"
                        subtitle="$7.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=6SC300-SFM-1.jpg"
                        description="The 6th Sense Crush 300DD Deep Diving Crankbait has taken deep water cranking to the next level. Designed to dive quickly and efficiently to depths of 14-19 feet with less drag, the 300DD maximizes your time in the strike zone." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Square Bills</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Lunkerhunt"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=LHIF-MDR-1.jpg"
                        description="Flat Sided Square Bill Impact Jolt 2.5F – Hard Bait Fishing Lure, Weighs ⅓ oz, 2.125” Length." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="LIVETARGET"
                        subtitle="$12.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=KOPSQRC-MGL-1.jpg"
                        description="Bluegill Squarebill Shallow Dive2 3/4 feet. The art of crank bait fishing as it is irresistible to Bass." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Strike King"
                        subtitle="$6.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=KVDSSB-650-1.jpg"
                        description="KVD 1.5 Shallow Square Bill Crankbait. The square bill design and unique action will constantly wander with erratic action while still running true." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Top Water</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Heddon"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=HCS-BB-1.jpg"
                        description="Super Spook Topwater Fishing Lure for Saltwater and Freshwater. HOOK DESIGN: 2 super-sharp hooks, especially important for scholing striper and other hard-charging species; Fish don't simply hit the Super Spook. They attack it." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Strike King"
                        subtitle="$8.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SKKVDSD-BGS-1.jpg"
                        description="KVD Sexy Dawg. All Strike King hard baits are made with the best components available, Casts like an arrow, Popping, spitting, side-to-side action, Loud internal rattle chambers, Chip-resistant finish, 3D eyes, Rugged, extra-strong treble hooks." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <HardBaitsCard 
                        title="Rebel Lures"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=RPR-077-1.jpg"
                        description="Pop-R Topwater Popper Fishing Lure. The original Pop-R and America's number 1 topwater popping lure; The standard by which all topwater poppers/chuggers have been judged for more than three decades." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentHardBaits;


import { Grid } from '@material-ui/core';
import React from 'react';
import SwimBaitsCard from './SwimBaitsCard';
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

function ContentSwimBaits() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Soft Swim Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Berkley"
                        subtitle="$7.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=PHSW-AYU-1.jpg"
                        description="The Berkley Powerbait Hollow Belly Swimbait is proof that some great baits are worth the wait. Berkley scientist have spent numerous days testing the Hollow Belly Swimbait to make sure it delivers the proper tail and body action." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Duckett"
                        subtitle="$9.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=CDSW-TFS-1.jpg"
                        description="Mimicking all of the appetizing movements of shad, the Castaic Boyd Duckett Swimbaits represent state-of-the-art engineering and lifelike design that big bass cannot ignore. Molded with a hollow body, the Castaic Boyd Duckett Swimbaits feature a hard-pounding paddle tail that moves the whole body, creating a subtle, yet enticing belly roll." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Strike King"
                        subtitle="$8.29"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=SKSAL-AYU-1.jpg"
                        description="The Strike King Shadalicious swimbait is desinged for the discriminating angler. Every feature, from the action to the lifelike colors, is designed with one the thing in mind...To catch more fish and bigger fish." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Hard Swim Baits</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="22nd Century"
                        subtitle="$59.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=CTTS-BLS-1.jpg"
                        description="Extremely versatile and effective, the 22nd Century Triple Trout Swimbait solves many of the problems anglers encounter when fishing a big bait, which is part of the reason its been a favorite with tournament anglers, trophy hunters and guides for years." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Fish Lab Bio"
                        subtitle="$14.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=FLBGSB-BCP-1.jpg"
                        description="When you want to search out areas for the largest bass, the Fish Lab Bio Gill Swimbait is a hard choice to pass up. Built with a segmented body, the Fish Lab Bio Gill Swimbait displaces water in a fluid, natural swimming action that big bass cannot resist." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Jackall"
                        subtitle="$49.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=JDS220-RTSG-1.jpg"
                        description="The product of Jackall’s advanced engineering, the Jackall Dowzswimmer 220SF Swimbait delivers a versatile presentation that makes it a must-have for big bait enthusiasts and tournament anglers alike." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Triton"
                        subtitle="$57.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=TMBBH-BBH-1.jpg"
                        description="The product of 18 different stages of prototyping, the Triton Mike Bucca Bull Herring Swimbait features a triple jointed construction and an unpolished finish. A great swimbait for herring and non-herring lakes alike, the profile and coloring of the Triton Mike Bucca Bull Herring Swimbait parallels many different species of baitfish." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Mattlures"
                        subtitle="$99.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=MLMHS-PCH-1.jpg"
                        description="Delivering the high level of detail and craftsmanship that Mattlures baits are known for, the Mattlures Meat Head Series Swimbait is built for attacking the top of the water column and provoking bites from trophy-caliber bass." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SwimBaitsCard 
                        title="Madness"
                        subtitle="$169.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=MB300SB-BB-1.jpg"
                        description="The Madness Japan Balam 300 Swimbait is not made for everyday anglers. Its large stature is built to meet the needs of anglers who are looking for one bite and trying to catch that fish-of-a-lifetime." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentSwimBaits;



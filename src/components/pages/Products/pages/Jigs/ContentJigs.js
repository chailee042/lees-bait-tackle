import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JigsCard from './Jigscard';

const useStyles = makeStyles({
    head2: {
        textAlign: 'center',
        fontSize: '2rem',
        paddingTop: '30px',
        margin:'15px',
        borderBottom: '2px solid orangered'
    },
});

function ContentJigs() {
    const classes= useStyles();

    return (
        <>
            <h2 className={classes.head2}> Bladed Swim Jigs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Phenix"
                        subtitle="$10.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=PPCW-DGP-1.jpg"
                        description="Blending elements of design from multiple lures, the Phenix Proline Stand Up Casting Wobble Jigs provide a unique bladed presentation that is as functional as it is attractive." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Z-Man"
                        subtitle="$15.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZEJACKX-BMB-1.jpg"
                        description="Designed by Elite Series pro’s, Brett Hite and Morizo Shimizu, the Z Man Chatterbait Jack Hammer is one of the most refined and highly anticipated vibrating jigs to ever hit the U.S. market." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="NuTech"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=NTCJ-BB-1.jpg"
                        description="The NuTech Crazy Jig combines NuTech’s signature head design with a premium vibrating blade to create a lure that outperforms all the rest. The NuTech Crazy Jig incorporates a precisely shaped cam-head that, unlike other jigs, rolls off of cover and remains upright at all times." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Swim Jigs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Googan"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=GSTTS-BKB-1.jpg"
                        description="There’s almost no better way to catch a big bass than in dense grass because of the opportunity to effectively ambush baitfish in the underwater jungle. To reach these fish, the Googan Squad Grass Hero Swim Jig is the perfect tool for the job." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Dirty Jigs"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=DTYJGSJ-AYU-1.jpg"
                        description="Dirty Jigs Swim Jig feature the Coosa River design. A 50 strand full skirt gives the Dirty Jigs Swim Jig a bulky profile for use in dirtier water or any time bass are targeting large shad or bream." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="D and M"
                        subtitle="$5.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=DMGT-SH-1.jpg"
                        description="Devastatingly detailed, the D and M Custom Baits Gator Swim Jig offers a true-to-life baitfish imitation that is sure to keep a strong bend in your rod. Boasting a high-level of realism, the D and M Custom Baits Gator Swim Jig." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Flipping Jigs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Talon"
                        subtitle="$4.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=TCLROFJ-BGL-1.jpg"
                        description="Loved by pro's for its versatile design, the Talon Custom Lures Rattlin Flipping Jig excels at flipping, pitching, and even swimming techniques. Its proven design and improved arkie-style head, sheds debris and excels in probing bush, grass and rocks, while also allowing the jig to consistently fall and land upright for a natural live crawfish imitation." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Zorro"
                        subtitle="$2.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=ZORBRBG-ALC-1.jpg"
                        description="Designed for coming through brush and other snaggy cover, the Zorro Baits Booza Brush Bug Jig features a double spurred trailer keeper to keep your trailer in proper position, and not let it slide down the hook." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Strike King"
                        subtitle="$4.59"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=GHHAJ-BMC-1.jpg"
                        description="The Strike King Greg Hackney Hack Attack Jig was born to fish extremely heavy cover. The unique head design and heavy weed guard combine to help the Hack Attack Jig navigate in and out of cover easily." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Football Jigs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="4x4"
                        subtitle="$4.49"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=4X4KHSJ-KH19A-1.jpg"
                        description="The Berkley Powerbait Hollow Belly Swimbait is proof that some great baits are worth the wait. Berkley scientist have spent numerous days testing the Hollow Belly Swimbait to make sure it delivers the proper tail and body action." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Keitech"
                        subtitle="$5.59"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=KTFJV2-BBL-1.jpg"
                        description="Redesigned and better than ever, the Keitech Tungsten Football Jig Version 2 was made for deep water fishing. The Keitech Tungsten Football Jig Version 2 features a tungsten compound head is thirty percent harder than lead and dramatically increases sensitivity." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Queen"
                        subtitle="$6.19"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=QTHH-BCW-1.jpg"
                        description="One of the most innovative jig designs on the market, the Queen Tackle Tungsten Hammerhead Rattling Football Jig utilizes a highly-individualized construction to help anglers drop the “hammer” on big fish." 
                    />
                </Grid>
            </Grid>
            <h2 className={classes.head2}> Finesse Jigs</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="6th Sense"
                        subtitle="$4.99"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=GKAH-FKC-1.jpg"
                        description="Built for those times when you need to downsize your presentation to trigger a bite, the 6th Sense Divine Ball Head Finesse Jig will become your new go-to bait when nothing else is catching fish." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Outkast"
                        subtitle="$4.89"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=OUTKFIN-BKB-1.jpg"
                        description="The Outkast Tackle Finesse Jig is finally here. Outkast took the same great head from their Money Jig, flattened the eye, added a thinner weedguard, and equipped it with a super sharp, premium Gamakatsu hook, as well as, a 42 strand skirt." 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <JigsCard 
                        title="Omega"
                        subtitle="$4.39"
                        imageSrc="https://img.tacklewarehouse.com/watermark/rs.php?path=OPJ-BB-1.jpg"
                        description="Today our lakes and rivers are receiving more pressure than ever. Therefore specialized techniques and tactics are required to consistently catch fish. The 5/16oz. Omega Finesse Jigs are small profile jigs that were designed to draw strikes from even then most finicky of fish. The 7/16oz. Omega Pitchin' Jigs are small profile jigs that were designed to draw strikes from even then most finicky of fish." 
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContentJigs;


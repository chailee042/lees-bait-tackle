import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '50px'
  },
  button: {
    border: '1px solid orangered',
    color: 'orangered',
    marginBottom: '8px',
    marginLeft: '8px'
  },
  image: {
    height: '150px'
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  sub: {
    color: 'orangered',
    marginBottom: '8px'
  },
  buy: {
    textAlign: 'center',
  },
  btn: {
    border: '1px solid orangered',
    color: 'orangered',
    margin:'8px'
  }
}));

export default function SoftBaitsCard(props) {
  const classes = useStyles();
  const { title, subtitle, description, imageSrc } = props;
  const [open, setOpen] = useState(false);
  const [buy, setBuy] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuyOpen = () => {
    setBuy(true);
  }

  const handleBuyClose = () => {
    setBuy(false);
  };

  
  return (
    <Card variant="outlined">
        <CardHeader
            title={title}
            subheader={subtitle}
        />
        <CardMedia className={classes.image} image={imageSrc}/>
        <CardContent>
            <Typography className={classes.text} variant="body2" component="p">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleBuyOpen} className={classes.button} size="small">Buy Now</Button>
            <Button onClick={handleOpen} className={classes.button} size="small">Info</Button>
            <Modal
              className={classes.modal}
              open={buy}
              onClose={handleBuyClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
              timeout: 500,
              }}
            >
              <Fade in={buy}>
                <div className={classes.paper}>
                  <div className={classes.buy}>
                  <h1 className={classes.sub2}>{title} Soft Bait</h1>
                  <h2>{subtitle}</h2>
                  <br/>
                  <Button className={classes.btn} size="small">Add to Cart</Button>
                  <Button onClick={handleBuyClose} className={classes.btn} size="small">Cancel</Button>
                  </div>
                </div>
              </Fade>
            </Modal>
            <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
              timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h1 className={classes.sub}>{subtitle}</h1>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </Fade>
            </Modal>
        </CardActions>
    </Card>
  );
}
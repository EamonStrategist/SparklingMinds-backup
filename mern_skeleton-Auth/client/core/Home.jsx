/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

const useStyles = makeStyles(theme => ({ 
card: {
maxWidth: 600, 
margin: 'auto',
marginTop: theme.spacing(5) 
},
title: {
padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
color: theme.palette.openTitle 
},
media: { 
minHeight: 400
} 
}))*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LogoImage  from './../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import './Home.css';   

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    
    display: 'flex',
    alignItems: 'center', // Center the content vertically
    minHeight: 400,
    width: '40%',
    height: '40%',
    margin: 'auto', // Center the content horizontally/ Set the height to auto to maintain the aspect ratio
  },
  navbar: {
    backgroundColor: '#333',
    padding: '15px',
    marginBottom: '20px', // Add margin bottom to separate the navbar from the card
  },
  navbarLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: 'bold',
  },
  navbarLinkHover: {
    textDecoration: 'underline',
  },
}));

export default function Home(){ 
const classes = useStyles()
return (
  <>
    {/* Render the navbar */}
    <div className={classes.navbar}>
      <Link to="/" className={classes.navbarLink}>
        Home
      </Link>{' '}
      |{' '}
      <Link to="/users" className={classes.navbarLink}>
        USERS
      </Link>{' '}
      |{' '}
      <Link to="/signup" className={classes.navbarLink}>
        SIGNUP
      </Link>{' '}
      |{' '}
      <Link to="/signin" className={classes.navbarLink}>
        SIGNIN
      </Link>{' '}
      |{' '}
      <Link to="/" className={classes.navbarLink}>
        Sign-out
      </Link>{' '}
      |{' '}
      <Link to="/about" className={classes.navbarLink}>
        About
      </Link>{' '}
      |{' '}
      <Link to="/products" className={classes.navbarLink}>
        Products
      </Link>{' '}
      |{' '}
      <Link to="/contact" className={classes.navbarLink}>
        Contact
      </Link>{' '}
      |{' '}
      <Link to="/admin" className={classes.navbarLink}>
        Admin
      </Link>
    </div>

{/* Render the card */}
<Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Sparkling Minds
        </Typography>
        <CardMedia className={classes.media} image={LogoImage} title="Sparkling Minds" />
        <CardContent>
          <Typography variant="body2" component="p">
            Sparkle in Every Story. Find Your Glitter. Find that special something for that special someone, from
            simple to statement to sentimental. Shop our top categories.
          </Typography>
        </CardContent>
      </Card>

      <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-logo.png" alt="Instagram" />
          </a>
          <br></br>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-logo.png" alt="Facebook" />
          </a>
        </div>
      </footer>
</>
)
}

/*const MyComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Card Title
        </Typography>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bike"
        />
        <Typography variant="body2" component="p">
          Card content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;*/


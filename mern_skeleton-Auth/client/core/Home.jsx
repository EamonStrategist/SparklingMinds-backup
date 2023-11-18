import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LogoImage from './../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles((theme) => ({
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
    alignItems: 'center',
    minHeight: 400,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
  },
  navbar: {
    backgroundColor: '#333',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between', // Adjusted to space out the links and cart
    alignItems: 'center', // Center items vertically
  },
  navbarLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  },
  navbarLinkHover: {
    textDecoration: 'underline',
  },
  cartIcon: {
    color: 'white',
    fontSize: 24,
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  },
  cartIconHover: {
    color: '#e44d26',
  },
}));

export default function Home() {
  const classes = useStyles();

  // Replace cartIcon with your desired icon or image for the cart
  const cartIcon = '🛒';

  return (
    <>
      {/* Render the navbar */}
      <div className={classes.navbar}>
        <div>
          <Link to="/" className={classes.navbarLink}>
            Home
          </Link>{' '}
          |{' '}
          <Link to="/users" className={classes.navbarLink}>
            Users
          </Link>{' '}
          |{' '}
          <Link to="/signup" className={classes.navbarLink}>
            Signup
          </Link>{' '}
          |{' '}
          <Link to="/signin" className={classes.navbarLink}>
            Signin
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
        {/* Cart Icon */}
        <div className={`${classes.cartIcon} ${classes.cartIconHover}`}>{cartIcon}</div>
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
    </>
  );
}

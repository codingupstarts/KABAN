import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar/';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
// import ModalDialog from './ModalDialog';
import './Navbar.css';
const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {
    const classes = useStyles();
  const [ setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Kaban
      </Typography>
      <Button color="inherit" onClick={handleOpen}>
        Signup
      </Button>
    </Toolbar>
    {/* <ModalDialog open={open} handleClose={handleClose} /> */}
  </AppBar>
  );
};
export default Navbar;
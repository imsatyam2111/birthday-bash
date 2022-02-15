import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/isLoggedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({isLoggedIn}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Birthday Bash
          </Typography>
          <Button color="inherit"><Link to={'/'} className="nav-links">Dashboard</Link></Button>
          <Button color="inherit" onClick={handleLogout}>
            <Link to={isLoggedIn === false ? '/login' : `/`} className="nav-links">
              {isLoggedIn === false ? `Login` : `Logout`}
            </Link>
          </Button>
          {!isLoggedIn && <Button color="inherit"><Link to={'/signup'} className="nav-links">Sign Up</Link></Button>}
        </Toolbar>
      </AppBar>
    </div>
    );
}
 
export default NavBar;
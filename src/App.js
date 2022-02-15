import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './layout/navbar';
import Dashboard from './modules/dashboard/index';
import Login from './signIn/login';
import SignUp from './signIn/signup';
import Home from './home/home';
import { useEffect } from 'react';
import { getBirthdaysStart } from './redux/reducers/birthdays';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.login);
  const birthdays = useSelector(state => state.birthday);
  console.log(`data `, birthdays);

  useEffect(() => {
    dispatch(getBirthdaysStart());
  }, [dispatch])

  return (
    <div className="App">
        <div className="App-main">
          <Router>
            <NavBar isLoggedIn={isLoggedIn} />
            <Switch>
              <Route exact path="/" component={isLoggedIn ? Home : Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;

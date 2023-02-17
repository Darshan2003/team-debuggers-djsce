import logo from './logo.svg';
import './App.css';
import './fonts/NeueHaasDisplayBlack.ttf';
import Top from './components/Top';
import Top2 from './components/Top2';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './components/Homepage';
import Trending from './components/Trending';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
          <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>    
    </Router>

  );
}

export default App;

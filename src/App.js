import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <div className="app container-fluid">
        <Router>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

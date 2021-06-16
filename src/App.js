import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <div className="app container-fluid">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contact from './components/Contact/Contact';
import TimeSheet from './components/TimeSheet/TimeSheet'
import {Navigationbar} from './components/Nav-bar/Navbar';
import WeeklySummary from './components/WeeklySummary/WeeklySummary';

class App extends Component {
  render () {
    return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Navigationbar />

          <Switch>
          <Route exact path="/" component={WeeklySummary} />
            <Route path="/timesheet" component={TimeSheet} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
    
  );
}
}

export default App;

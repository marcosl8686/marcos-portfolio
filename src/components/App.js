import React, { Component } from 'react';
import Header from './header/header';
import Lego from './about/lego/lego';
import Gunpla from './about/gunpla/gunpla';
import Zelda from './about/zelda/zelda';
import Marcos from './about/marcos/marcos';
import Portfolio from './portfolio/portfolio';
import Experience from './experience/experience';
import Contact from './contact/contact';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={ Header } key='/' />
            <Route path={process.env.PUBLIC_URL + '/lego'} component={ Lego } key='/lego'/>
            <Route path={process.env.PUBLIC_URL + '/gunpla'} component={ Gunpla } key='/gunpla'/>
            <Route path={process.env.PUBLIC_URL + '/zelda'} component={ Zelda } key='/zelda'/>
            <Route path={process.env.PUBLIC_URL + '/marcos'} component={ Marcos } key='/marcos'/>
            <Route path={process.env.PUBLIC_URL + '/portfolio'} component={ Portfolio } key='/portfolio'/>
            <Route path={process.env.PUBLIC_URL + '/experience'} component={ Experience } key='/experience'/>
            <Route path={process.env.PUBLIC_URL + '/contact'} component={ Contact } key='/contact'/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

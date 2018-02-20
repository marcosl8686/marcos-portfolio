import React, {Component} from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export default class NavBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} width={ 200 }>
        <Link to={process.env.PUBLIC_URL + '/'} className="menu-item ">Home</Link>
        <Link to={process.env.PUBLIC_URL + '/lego'} className="menu-item ">About</Link>
        <Link to={process.env.PUBLIC_URL + '/portfolio'} className="menu-item ">Portfolio</Link>
        <Link to={process.env.PUBLIC_URL + '/experience'} className="menu-item ">Experience</Link>
        <Link to={process.env.PUBLIC_URL + '/contact'} className="menu-item ">Contact</Link>
        <img src={logo} className="App-logo" alt="logo" />
      </Menu>
    </div>
    );
  }
}

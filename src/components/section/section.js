import React, {Component} from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'
import NavBar from '../navbar/navbar';




export default class Section extends Component {
  render() {
    return (
        <div id="outer-container">
          <NavBar />
          <main id="page-wrap">
             {this.props.children}
          </main>
        </div>
    );
  }
}

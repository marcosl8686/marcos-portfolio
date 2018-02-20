import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';
import './header.css';
import './query.css';
import Section from '../section/section';

export default class Header extends Component {
    render() {
        return(
          <Section>
            <header>
                <div className="hero-text-box ">
                    <h5>Marcos Lee</h5>
                    <h1>Web Developer</h1>
                    <h5>Three Reasons Why Marcos is a great Developer</h5>
                    <Link to={process.env.PUBLIC_URL + '/lego'} className="btn btn-lg ">Click To Find Out</Link>
                </div>
            </header>
          </Section>
        );
    }
}

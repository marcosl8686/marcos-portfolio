import React, {Component} from 'react';
import {Button, Grid, Col, Row} from 'react-bootstrap';
import PortfolioItems from './portfolioItems';
import Section from '../section/section';


export default class Portfolio extends Component {
  render() {

    return (
      <Section>
      <Grid className="section-portfolio">
        <Row className="show-grid text-center">
          <Col xs={12} className="portfolio-header">
            <h3 className="mid-title">MY PORTFOLIO</h3>
            <p className="sub-title" id="subTitle">Projects</p>
          </Col>
        </Row>

        <PortfolioItems />

      </Grid>
      </Section>
    );
  }
};

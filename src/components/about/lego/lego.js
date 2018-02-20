import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Ace from '../ace-content/ace-editor';
import Console from '../console/console';
import content1 from '../ace-content/content1';
import type1 from '../console/type1';
import LegoImg from '../img/lego.jpg';
import {Link} from 'react-router-dom';
import Section from '../../section/section';



export default class Lego extends Component {
  constructor(props) {
		super(props);
		this.state = {
        aceEditor: content1,
  			midTitle: "1. He Loves Legos",
        subTitle: "Creative Mind",
        console: {
          p1: "",
          p2: "",
          p3: "",
          p4: ""
        }
      }
	}


  render() {
    return (
      <Section>
      <Grid className="section-about">
        <Row className="show-grid section-header text-center">
          <Col xs={12}>
            <h3 className="mid-title">{this.state.midTitle}</h3>
            <p className="sub-title" id="subTitle">{this.state.subTitle}</p>
          </Col>
        </Row>
        <Row className="show-grid section-body">
          <Col xs={12} md={7}>
            <Link to={process.env.PUBLIC_URL + '/lego'} className="btn tab ">Reason-1</Link>
            <Link to={process.env.PUBLIC_URL + '/gunpla'} className="btn tab ">Reason-2</Link>
            <Link to={process.env.PUBLIC_URL + '/zelda'} className="btn tab ">Reason-3</Link>
            <Link to={process.env.PUBLIC_URL + '/marcos'} className="btn tab ">Marcos Lee</Link>
            <Ace content1 = {this.state.aceEditor} />
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={12}>
                <Image src={LegoImg} responsive />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Console console = {this.state.console} />
                <Button className="console-btn" onClick={ ()=> this.setState({ console: type1 })}>
                  Run Code
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>

    );
  }
}

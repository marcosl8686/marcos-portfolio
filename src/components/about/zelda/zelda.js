import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Ace from '../ace-content/ace-editor';
import Console from '../console/console';
import content3 from '../ace-content/content3';
import type3 from '../console/type3';
import ZeldaImg from '../img/link.jpg';
import {Link} from 'react-router-dom';
import Section from '../../section/section';


export default class Zelda extends Component {
  constructor(props) {
		super(props);
		this.state = {
        aceEditor: content3,
  			midTitle: "1. Zelda",
        subTitle: "Problem Solving",
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
                <Image src={ZeldaImg} responsive />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Console console = {this.state.console} />
                <Button className="console-btn" onClick={ ()=> this.setState({ console: type3 })}>
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

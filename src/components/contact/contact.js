import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Section from '../section/section';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaHome from 'react-icons/lib/fa/home';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';
import Fade from '../fade';
import Resume from './resume/MarcosLeeR.pdf'

export default class Contact extends Component {
  render() {
    return(
      <Section>
        <Grid className="section-contact">
          <Row className="show-grid section-header text-center">
            <Col xs={12}>
              <h3 className="mid-title">CONTACT ME</h3>
              <p className="sub-title" id="subTitle">Quick Connection</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="text-center about">
                <FaPhoneSquare className="contact-icon" />
                <p>(714) 337-3720</p>
            </Col>
            <Col xs={4} className="text-center about">
                <FaHome className="contact-icon text-center" />
                <p>Cypress,CA 90630</p>
            </Col>
            <Col xs={4} className="text-center about">
                <FaEnvelope className="contact-icon" />
                <div>
                <p><a href="mailto:marcosl8686@gmail.com" target="_blank">marcosl8686@gmail.com</a></p>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="text-center about">
              <FaLinkedinSquare className="contact-icon" />
              <div>
                <p><a href="https://www.linkedin.com/in/marcos-lee-9a0a8959/" target="_blank">LinkedIn</a></p>
              </div>
            </Col>
            <Col xs={4} className="text-center about">
              <FaGithubSquare className="contact-icon" />
              <div>
                <p><a href="https://github.com/marcosl8686" target="_blank">GitHub</a></p>
              </div>
            </Col>
            <Col xs={4} className="text-center about">
              <FaFileTextO className="contact-icon" />
              <div>
                <p><a href={Resume} download="marcosleeR.doc.pdf">Resume</a></p>
              </div>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}

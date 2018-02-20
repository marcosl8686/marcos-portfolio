import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Section from '../section/section';
import Education from './education/education';
import WorkExperience from './work/work';

export default class Experience extends Component {
  render() {
    return(
        <Section>
          <Grid className="section-experince">
            <Row className="show-grid experience-header">
              <Col xs={12} md={6}>
                <h3 className="experience-title">Education</h3>
                <Education />
              </Col>
              <Col xs={12} md={6}>
                <h3 className="experience-title">Experience</h3>
                <WorkExperience />
              </Col>
            </Row>
          </Grid>
        </Section>
    );
  }
}

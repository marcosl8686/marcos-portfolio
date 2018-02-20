import React, {Component} from 'react';
import ExperienceList from '../experienceList/experienceList';
import FaBriefcase from 'react-icons/lib/fa/briefcase';

export default class WorkExperience extends Component {

  renderList = () => {
    return ExperienceList.map((experience) => {
      return(
        <div className="work">
          <div className="about-info-inner">
            <p className="year"><FaBriefcase className="experience-icon" />   {experience.year}</p>
            <h5 className="name">{experience.name}</h5>
            <h6 className="title">{experience.title}</h6>
            <p className="inst">{experience.topic}</p>
          </div>
        </div>
      );
    });
  }


  render() {
    return (
      <div>
      {this.renderList()}
      </div>
    );
  }
}

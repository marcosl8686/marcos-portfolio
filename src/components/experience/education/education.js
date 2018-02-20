import React, {Component} from 'react';
import EducationList from '../experienceList/educationList';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

export default class Education extends Component {

  renderList = () => {
    return EducationList.map((education) => {
      return(
        <div className="education">
          <div className="about-info-inner">
            <p className="year"><FaGraduationCap className="experience-icon" />   {education.year}</p>
            <h5 className="title">{education.name}</h5>
            <p className="inst">{education.topic}</p>
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

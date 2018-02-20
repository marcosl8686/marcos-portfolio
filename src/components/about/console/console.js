import React, {Component} from 'react';
import border from '../img/border.jpg';
import { Image } from 'react-bootstrap';

import TypeWriter from 'react-typewriter';

export default class Console extends Component {

  render() {
    return (

      <div className="console">
        <Image src={border} className="console-border"></Image>
        {/* <TypeWriter typing={1}> */}
          <p>{this.props.console.p1}</p>
          <p>{this.props.console.p2}</p>
          <p>{this.props.console.p3}</p>
          <p>{this.props.console.p4}</p>
        {/* </TypeWriter> */}
      </div>
    );
  }
}

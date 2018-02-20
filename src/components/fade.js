import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

export default class Fade extends Component {
  state = {
    children : null
  }
  componentDidMount(){
    this.setState({children: this.props.children})
  }

  render(){
    return (
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}>
        {this.state.children}
      </CSSTransitionGroup>
    )
  }
}

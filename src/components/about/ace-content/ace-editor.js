import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';


export default class Ace extends Component {
  render() {
    return(
      <AceEditor
        mode="javascript"
        cursorStart={10}
        theme="monokai"
        name="marcos-ace"
        wrapEnabled={true}
        onLoad={this.onLoad}
        fontSize={10}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.content1}
        height="500px"
        width="100%"
        setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      }}/>
    );
  }
}

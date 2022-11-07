import React, { Component } from 'react';
import EditArticle from '../components/editor/editArticle';
import Editor2 from '../components/editor2';

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Editor2 />
          <EditArticle article={this.state} />
        </div>
      </div>
    );
  }
}
export default Write;

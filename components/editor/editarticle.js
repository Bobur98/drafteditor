import React, { Component } from 'react';
// import apiClient from "../api/api_client";
import { withRouter } from 'next/router';
// import ArticleEditor from "../editor/editor";
import ArticleEditor from './index';
class EditArticle extends Component {
  constructor(props) {
    super(props);
    console.log('editarticle', props);
    this.state = {
      id: props.article.id || null,
      title: props.article.title || '',
      body: props.article.body || null,
      isNew: props.article.body ? false : true,

      // this is to make sure we dont do stringify again
      articleUpdated: false,
    };

    // this.submitForm = this.submitForm.bind(this);
  }

  handleEditorContent = (content) => {
    this.setState({
      body: content,
      articleUpdated: true,
    });
  };

  //   submitForm = async (event) => {
  //     event.preventDefault();
  //     let article;
  //     if (this.state.isNew) {
  //       article = await apiClient.saveArticle({
  //         title: this.state.title,
  //         body: JSON.stringify(this.state.body),
  //       });
  //     } else {
  //       let articleContent = this.state.body;
  //       if (this.state.articleUpdated) {
  //         articleContent = JSON.stringify(articleContent);
  //       }
  //       article = await apiClient.updateArticle({
  //         id: this.state.id,
  //         title: this.state.title,
  //         body: articleContent,
  //       });
  //     }
  //     this.props.router.push(/articles/${article.slug});
  //   };

  render() {
    return (
      <div style={{ height: '500px' }}>
        <ArticleEditor
          handleContent={this.handleEditorContent}
          initialContent={this.state.body}
        />
      </div>
    );
  }
}

export default withRouter(EditArticle);

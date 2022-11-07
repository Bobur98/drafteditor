import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import dynamic from 'next/dynamic';
import DOMPurify from 'dompurify';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor2 = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  //   const createMarkup = (html) => {
  //     return {
  //       __html: DOMPurify.sanitize(html),
  //     };
  //   };

  return (
    <div>
      <header>Rich Text Editor Example</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        localization={{
          locale: 'ko',
        }}
        // toolbarOnFocus
        toolbar={{
          options: [
            'fontFamily',
            'blockType',
            'fontSize',
            'inline',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'embedded',
            'emoji',
            'image',
            'history',
          ],
        }}
      />
      <div
        className="preview"
        // dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </div>
  );
};

export default Editor2;

import React from "react";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import EditorRoot from "components/common/IEditor/EditorRoot";

import { useSoftUIController } from "context";

function MDEditor({ value }) {
  const [controller] = useSoftUIController();
  const { darkMode } = controller;

  const [convertedContent, setConvertedContent] = React.useState(null);
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  React.useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  return (
    <EditorRoot ownerState={{ darkMode }}>
      {value && typeof value === "function" && value(convertedContent)}
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </EditorRoot>
  );
}

MDEditor.defaultProps = {
  value: () => {},
};
export default MDEditor;

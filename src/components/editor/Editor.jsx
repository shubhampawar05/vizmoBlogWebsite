import React, { useState } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

function Editor() {
  const [value, setValue] = useState("");
  console.log(value);


  const handleSetValue = (editor)=>{
    setValue(editor.getContents())
  }
  const AddBlog = ()=>{
    
  }
  const filterDetails = ()=>{

  }


  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleSetValue}
      placeholder='Write Your Blog here....'
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link", "image", "video"],
        ],
      }}
    />
  );
}

export default Editor;

import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/editor/Editor';
import Header from '../components/header/Header';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import { Link } from 'react-router-dom';
const EditorPage = () => {

  
 

  return (
    <div>
      <Header/>
      <ContentWrapper>
        <div className=' w-full px-12 py-4 relative'>
        <Editor />
        <p className=' text-right py-4 flex justify-between '>
      <Link to={"/"}>  <button className=' border p-1 rounded  bg-[#46BCAF] font-semibold text-white'> BACK TO MAIN PAGE</button></Link>
          <button className=' border p-1 rounded  bg-[#46BCAF] font-semibold text-white'> ADD BLOG</button></p>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default EditorPage
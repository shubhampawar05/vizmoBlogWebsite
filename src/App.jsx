import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage'
import DetailsPage from './pages/DetailsPage';
import EditorPage from './pages/EditorPage'
import BlogProvider from './context/BlogContext';

function App() {
 
  return (
    <>
     <BlogProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='AddPost' element={<EditorPage/>}/>
      <Route path='/EditPost' element={<EditorPage/>}/>
      <Route path='Details/:uuid' element={<DetailsPage/>}/>
     </Routes>
     </BrowserRouter>
  
     </BlogProvider>
    </>
  )
}

export default App

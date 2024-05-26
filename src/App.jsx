import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './components/SingleCard/pages/MainPage'
import DetailsPage from './components/SingleCard/pages/DetailsPage';
import EditorPage from './pages/EditorPage';

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='AddPost' element={<EditorPage/>}/>
      <Route path='Details/:uuid' element={<DetailsPage/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App

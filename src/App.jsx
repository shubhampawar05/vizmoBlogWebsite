import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage'
import EditorPage from './pages/EditorPage'
import DetailsPage from './pages/DetailsPage';

function App() {
  const [allData , setAllData]=useState([])

  useEffect(()=>{
    const data = JSON.stringify(allData) || [];
    localStorage.setItem('localData', data)
   
  },[])

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

import React, { useEffect } from 'react'
import Home from './pages/Home'
import Stream from './pages/Stream'
import Area from './pages/Area'
import Topper from './pages/Topper'
import Announcement from './pages/Announcement'
import Team from './pages/Team'
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Header from './components/Header'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Demo from './components/Demo'
import Herosmall from './components/Herosmall'
import List from './pages/List'
import Studentprofile from './pages/Studentprofile'




const App = () => {
  const theme={
    colors:{
      header:'#75482d',
      headeractive:'#c32775',
      text6:'#f8f8f8',
      text7:'#5a1466 ',
      white:'white'
    },
    media:{
      smaller:'480px',
      tablet:'768px',
      laptop:'1279px',
      desktop:'1280px'
    }
  }





  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/stream" element={<Stream/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path="/topper" element={<Topper/>}/>
              <Route path="/announcement" element={<Announcement/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/list" element={<List/>}/>
              <Route path="/studentprofile/:id" element={<Studentprofile/>}/>
            </Routes>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    )
}

export default App
import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'
import GalleryBody from './components//gallery-components/GalleryBody'
import Header from './components/Header.'
import NavMenu from './components/nav-components/NavMenu'

function App() {

  // STATE TO KEEP TRACK OF WHICH DROPDOWN MENU ITEM IS SELECTED; BY DEFAULT, ALL
  const [galleryState, setGalleryState] = useState("All");

  return (
    <div id='content'>
    
      <Header/>

      {/* PASS DOWN DROPDOWN SELECTION AND FUNCTION TO UPDATE IT AS PROPS */}
      <NavMenu galleryState={galleryState} setGalleryState={setGalleryState}/>

      {/* PASS DOWN DROPDOWN SELECTION TO THE GALLERY FOR RE-RENDER */}
      <GalleryBody galleryState={galleryState}/>

      <Footer/>

    </div>
  )
}

export default App

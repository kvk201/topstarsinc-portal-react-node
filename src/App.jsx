// import { useState } from 'react'
import './App.css'
import {
  Navbar,
  Home,
  
} from "./components"

function App() {

  return (
    <div>
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
      {/* footer here */}
    </div>
  )
}

export default App

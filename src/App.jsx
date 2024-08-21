
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPageHome from './Components/Landing/LandingPageHome'
import About from './Components/About/About'

function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPageHome/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
    </>
  )
}

export default App

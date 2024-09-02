
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPageHome from './Components/Landing/LandingPageHome'
import About from './Components/About/About'
import Example from './Components/example/Example'
import Nav from './Components/Navigation/Nav'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/404/NotFound'
import Account from './Components/Account/Account'

function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/landing' element={<LandingPageHome/>}/>
    <Route path='/ex' element={<Example boy="Emmanuel"/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/account/:id/:username' element={<Account/>}/>
    </Route>
   </Routes>
    </>
  )
}

export default App

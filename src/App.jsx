import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import { About, Contact, Home, Projects } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20 h-[100vh]'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
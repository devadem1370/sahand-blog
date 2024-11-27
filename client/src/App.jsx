import React from 'react'
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path='/sign-up' element={<SignUp/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
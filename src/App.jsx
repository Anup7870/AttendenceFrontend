import { useState } from 'react'
import './App.css'
import Scanner from './components/Scanner' 
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={isLogin?<Main/>:<Login/>}/>
    </Routes>
      
    </>
  )
}

export default App

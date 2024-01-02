import React from 'react'
import Sidenav from '../components/Sidenav'
import { Route,Routes } from 'react-router-dom'
import Attendence from '../components/Attendence'
import View from '../components/View'

export default function Main() {
  return (
    <div className='w-full h-main flex  '>
      <section className='w-[18%] bg-white shadow-sha h-full p-8 '>
        <Sidenav/>
      </section>
      <section className='flex-1 '>
      <Routes>
          <Route to="/" element={<Attendence/>}/>
          <Route to="/view" element={<View/>}/>
        </Routes>
        <Attendence/>
      </section>
    </div>
  )
}

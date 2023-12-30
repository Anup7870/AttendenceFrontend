import React from 'react'
import Sidenav from '../components/Sidenav'

export default function Main() {
  return (
    <div className='w-full h-main  '>
      <section className='w-[18%] bg-white shadow-sha h-full p-8 '>
        <Sidenav/>
      </section>
      <section></section>
    </div>
  )
}

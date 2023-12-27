import React from 'react'
import logo from '../assets/logo.png'
export default function Login() {
  return (
    <main className='w-full h-main px-2'>
      <section className='w-[45%] h-full flex items-center flex-col justify-center'>
        <img className='w-40 h-40' src={logo} alt='' />
        <h1 className='font-nunito font-bold text-6xl'>Bsc.IT</h1>
        <p className='font-nunito text-xl text-center'>This is a Attendence making system by using qr code was by It department of Dr. Shyama Prasad Mukherjee University Ranchi</p>
      </section>
      <section className='flex-1 W-[55%]'></section>
    </main>
  )
}

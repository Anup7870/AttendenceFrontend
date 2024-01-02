import React, { useRef } from 'react'
import QrReader from 'react-qr-scanner'
import { useState } from 'react'
  const previewStyle = {
    height: 240,
    width: 380,
    marginLeft: "25px",
  };
export default function Scanner() {
  const [isopen,setIsopen] = useState(false);
  const [data, setData] = useState('')
  const camera = useRef(true); // for camera button
  console.log(camera.current);
  const openClose= (e)=>{
    e.preventDefault();
    setIsopen(()=>isopen?false:true);
  }
  return (
    <div className='w-[40%]   px-3 flex items-center justify-center flex-col'>
      <QrReader
          
          delay={500}
          style={previewStyle}
          onError={(err)=>console.error(err)}
          // onScan={(data)=>console.log(data)}
          />
          {/* hii scanner */}
        <p>{data}</p>
        <div className='w-full flex justify-center  mt-4'>
        <button
          onClick={openClose}
          ref={camera}
          className='bg-[#4154F1] text-white px-3 py-2 rounded-[0.5rem] w-[30%]'>
          {isopen ? "Close" : "Make"}
        </button>
        </div>
        <div>
          <p className='font-bold text-5xl mt-3'>5:00</p>
        </div>
    </div>
  )
}

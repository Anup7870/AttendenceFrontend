import React, { useEffect, useRef } from 'react'
import QrReader from 'react-qr-scanner'
import { useState } from 'react'
import axios from 'axios';
  const previewStyle = {
    height: 240,
    width: 380,
    marginLeft: "25px",
  };
export default function Scanner({apply,parameter}) {
  const [isopen,setIsopen] = useState(false);
  const [data, setData] = useState('')
  const camera = useRef(true); // for camera button
  console.log(camera.current);
  const openClose= (e)=>{
    e.preventDefault();
    setIsopen(()=>isopen?false:true);
  }
  console.log(parameter);
  useEffect(()=>{
    const data= {...parameter};
    
    // const api = axios.post("http://localhost:3000/add/:year").then(()=>{})
  },[data])
  return (
    <div className='w-[40%]   px-3 flex items-center justify-center flex-col'>
      <QrReader
          
          delay={500}
          style={previewStyle}
          onError={(err)=>console.error(err)}
          onScan={(data)=>{setData(data.text); console.log(data.text)}}
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

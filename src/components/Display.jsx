import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import axios from "axios";
export default function Display({ parameter }) {
  const context = useContext(Context);
  const [data,setData] = useState([]);
  useEffect(() => {
    var today = new Date();
    var years = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var date = dia + "-" + mes + "-" + years;
    const apiColling = async () => {
      try{
        const api = await axios.get(
          `http://localhost:3000/add/atten/${context.user._id}/${parameter.sem}/${date}/${parameter.year}`
        ).then((data) => {
          // console.log(data.data);
          setData(data.data.data)
          console.log(data.data.data);
        })
      }
      catch(err){
        console.log(err);
      }
      
    };
    apiColling();
  }, [context.trigger, parameter]);
  return (
    <div className='w-[60%] bg-[#fff] rounded-lg px-2 pb-1 overflow-auto'>
      <nav className='grid grid-cols-4  text-center pt-3 sticky top-0 bg-[#fff] shadow-sha  '>
        <span className='text-lg font-bold'>Name </span>
        <span className='text-lg font-bold'>Roll</span>
        <span className='text-lg font-bold'>Reg</span>
        <span className='text-lg font-bold'>percentage</span>
      </nav>
      <hr className='mt-1' />
      <div className='w-full overflow-auto'>
        
        {data&&data.map(item=>(
          <div className='grid grid-cols-4 text-center  mt-3'>
          <span className='truncate'>
            {item.name}
          </span>
          <span className='truncate'>{item.roll}</span>
          <span className='truncate'>{item.reg}</span>
          <span className='truncate'>100%</span>
        </div>
        ))}
      </div>
    </div>
  );
}

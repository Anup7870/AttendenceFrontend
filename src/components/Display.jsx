import React, { useContext, useEffect } from "react";
import Context from "../Context";
import axios from "axios"
export default function Display() {
  const context = useContext(Context);
  useEffect(()=>{
    const apiColling = async ()=>{
      const api = await axios.get(`http://localhost:3000/add//atten/${context.user._id}/:sem/:date/:year`)
    }
  },[context.trigger])
  return (
    <div className="w-[60%] bg-[#fff] rounded-lg px-2 pb-1 overflow-auto">
      <nav className="grid grid-cols-4  text-center pt-3 sticky top-0 bg-[#fff] shadow-sha  ">
        <span className="text-lg font-bold">Name </span>
        <span className="text-lg font-bold">Roll</span>
        <span className="text-lg font-bold">Reg</span>
        <span className="text-lg font-bold">percentage</span>
      </nav>
      <hr className="mt-1" />
      <div className="w-full overflow-auto">
      <div className="grid grid-cols-4 text-center  mt-3">
        <span className="truncate">md saif alammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm </span>
        <span className="truncate">21b520973</span>
        <span className="truncate">dspmu2021001175</span>
        <span className="truncate">100%</span>
      </div>
      <div className="grid grid-cols-4 text-center  mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center  mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center  mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center  mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3 ">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3 ">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>

      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      <div className="grid grid-cols-4 text-center mt-3">
        <span>Name </span>
        <span>Roll</span>
        <span>Reg</span>
        <span>percentage</span>
      </div>
      </div>
      
    </div>
  );
}

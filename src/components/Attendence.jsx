import React, { useEffect } from "react";
import Scanner from "./Scanner";
import { useState } from "react";
import { Context } from "../Context";
import { useContext } from "react";
import Display from "./Display";
import axios from "axios";

export default function Attendence() {
  const item = useContext(Context);
  console.log(item.user); // context api
  // const opt = ["21-24", "22-25", "25-27"];
  const [opt, setOpt] = useState([]);
  useEffect(() => {
    const api = axios
      .get("http://localhost:3000/add/year")
      .then((data) => {
        // console.log(data.data.data.toArray());
        setOpt(data.data.data);
        console.log(opt);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='w-full h-full pl-3 pt-3'>
      <nav className='ml-10 mt-2 text-lg font-nunito font-bold'>
        Attendence :-
      </nav>
      <div className='bg-[#fff] w-full'>
        <form action='' className='flex flex-row item-center px-3 py-2 gap-4'>
          {/* <DropDownButton values="Semester"/> */}
          <div className='flex flex-col w-[18%]'>
            <span>Session</span>
            <div>
              <select className='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'>
                {/* <option selected>Ple</option> */}
                {opt&&opt.map((item) => (
                  <option key={item._id}>{item.year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col w-[18%]'>
            <span>Semester</span>
            <div>
              <select class='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'>
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                  <option >4</option>
                  <option >5</option>
                  <option >6</option>
                  <option >7</option>
                  <option >8</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col w-[18%]'>
            <span>Minutes</span>
            <div>
              <select class='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'>
                <option>5</option>
                <option>8</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <button className='bg-[#4154F1] text-white px-3 py-2 rounded-[0.5rem] h-9 mt-6'>
            Apply
          </button>
        </form>
      </div>
      <div className='w-full flex mt-5 h-[80%]'>
        <Scanner />
        <Display />
        {/* <button>{isopen?"Close camera":"Open camera"}</button> */}
      </div>
    </div>
  );
}

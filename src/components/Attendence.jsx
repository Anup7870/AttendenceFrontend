import React, { useEffect } from "react";
import Scanner from "./Scanner";
import { useState } from "react";
import { Context } from "../Context";
import { useContext } from "react";
import Display from "./Display";
import axios from "axios";

export default function Attendence() {
  const item = useContext(Context);
  const [apply,setApply]=useState(false);
  const [opt, setOpt] = useState([]);
  const [parameter, setParameters] = 
  useState(
      {
        sem: "1",
        year: "",
        min: "",
      }
  );
  
  useEffect(() => {
    const api = axios
      .get("http://localhost:3000/add/year")
      .then((data) => {
        setOpt(data.data.data);
        setParameters(prevState => ({
          ...prevState,
          year: data.data.data[0].year // update year here
        }));
        // console.log(opt);
      })
      .catch((err) => console.log(err));
  }, []);

  const setQrData = (e) =>{
    e.preventDefault();
    setApply(true);
    // console.log(apply);
  }

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
              <select 
              defaultValue={parameter.year}
                className='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'
                onChange={(e) =>
                  setParameters({ ...parameter, year: e.target.value })
                }>
                {opt &&
                  opt.map((item) => (
                    <option key={item._id}>{item.year}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col w-[18%]'>
            <span>Semester</span>
            <div>
              <select
                class='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'
                onChange={(e) =>
                  setParameters({ ...parameter, sem: e.target.value })
                }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col w-[18%]'>
            <span>Minutes</span>
            <div>
              <select
                class='h-9 border border-[#CED4DA] rounded-[0.4rem] outline-none w-full'
                onChange={(e) =>
                  setParameters({ ...parameter, min: e.target.value })
                }>
                <option>5</option>
                <option>8</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <button onClick={setQrData} className='bg-[#4154F1] text-white px-3 py-2 rounded-[0.5rem] h-9 mt-6'>
            Apply
          </button>
        </form>
      </div>
      <div className='w-full flex mt-5 h-[80%]'>
        <Scanner parameter={parameter} apply={apply}/>
        <Display />
        {/* <button>{isopen?"Close camera":"Open camera"}</button> */}
      </div>
    </div>
  );
}

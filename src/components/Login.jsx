import React, { useState,useContext } from "react";
import logo from "../assets/logo.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import Context from "../Context";
export default function Login() {
  const [user, setUser] = useState("");
  const context = useContext(Context);
  const [data,setData]= useState({
    userId:"",
    password:"",
  })
  const login = async (e)=>{
    e.preventDefault();
    if(user==="teacher"){
      console.log("teacher",data)
      const api = await axios.post("http://localhost:3000/teacher/auth",data);
      // api.status===200?context.setLogin(true); context.setUser(api.data):context.setLogin(true);
      if(api.status===200){
        context.setLogin(true);
        context.setUser(api.data.data);
        console.log(context.user);
        localStorage.setItem("login",true);
      }
      else{
        context.setLogin(false);
      }
      console.log(api)
      console.log(context.login);
    }
  }

  return (
    <main className='w-full h-main flex flex-col md:flex-row md:items-center'>
      <section className='lg:w-[45%]  pl-2 h-main flex items-center flex-col  justify-center'>
        <img className='w-40 h-40' src={logo} alt='' />
        <h1 className='font-nunito font-bold text-6xl'>Bsc.IT</h1>
        <p className='font-nunito text-xl text-center  mt-5'>
          This is a Attendence making system by using qr code was by It
          department of Dr. Shyama Prasad Mukherjee University Ranchi
        </p>
      </section>
      <section className='flex-1 flex lg:W-[55%] md:w-[100%] sm:w-full h-main items-center justify-center '>
        <form action='' className='bg-[#fff] w-[80%] md:w-[70%] m-auto'>
          <div className='p-10 sm:p-5 md:p-5 w-full'>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={user}
              onChange={(data) =>setUser(data.target.value)}>
              <div className='flex gap-16 lg:gap-16 md:gap-16 sm:gap-5 w-full '>
                <FormControlLabel
                  className=' w-[40%]  px-1 py-2 border border-[#5F6EF1] bg-[#F0F4FB] rounded-lg m-0'
                  value='teacher'
                  control={<Radio />}
                  label='Teacher'
                  
                />
                <FormControlLabel
                  className='  w-[40%] px-1  py-2 border border-[#5F6EF1] bg-[#F0F4FB] rounded-lg md:text-sm sm:text-sm m-0'
                  value='admin'
                  control={<Radio />}
                  label='Admins'
                  
                />
              </div>
            </RadioGroup>
            <div className='mt-5'>
              <span className=''>Username</span>
              <input
                type='text'
                className='w-full outline-none pl-3 border h-10 border-[#CED4DA] rounded-lg mt-2'
                onChange={(e)=>setData({...data,userId:e.target.value})}
              />
            </div>
            <div className='mt-5 '>
              <span>Password</span>
              <input
                type='password'
                className='w-full outline-none pl-3 h-10 border border-[#CED4DA] rounded-lg mt-2'
                onChange={(e)=>setData({...data,password:e.target.value})}
              />
            </div>
            <div className='grid grid-flow-row mt-5'>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Remember me'
              />
              <Button
                variant='contained'
                size='medium'
                sx={{
                  marginTop: "1.5rem",
                  widht: "30%",
                }}
                onClick={login}
                >
                sign in
              </Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

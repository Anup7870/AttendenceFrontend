import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";


const data = {
  name: "Anup",
};

export default function Nav() {
  const [isClick, setIsClick] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className='bg-[#fff] w-full flex items-center justify-between px-5 py-2 drop-shadow-md '>
        <span className='text-2xl font-nunito font-bold text-[#012970]'>
          Dspmu attendence
        </span>
        <div className='flex items-center justify-center gap-8 '>
          {!isLogin ? " " : <OnLogin />}
        </div>
      </nav>
    </>
  );
}


const OnLogin = () => {
  return (
    <>
      <p>{data.name}</p>
      <Avatar alt={data.name} src='src/assets/downlaod.jpg' />
    </>
  );
};

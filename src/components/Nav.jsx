import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState,useContext } from "react";
import Context from "../Context";

export default function Nav() {
  const [isClick, setIsClick] = useState(false);
  const context = useContext(Context);
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
          {!context.login ? " " : <OnLogin />}
        </div>
      </nav>
    </>
  );
}


const OnLogin = () => {
  const context = useContext(Context);
  const name = context.user.name;
  return (
    <>
      <p>{name}</p>
      <Avatar alt={name} src='src/assets/downlaod.jpg' />
    </>
  );
};

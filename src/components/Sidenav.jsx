import React from "react";
import { FaBook } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { BiLogInCircle } from "react-icons/bi";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
export default function Sidenav() {
  const [opt, setopt] = useState(true);
  const bag = classNames({
    "flex items-center": true,
    " gap-1": true,
    "py-3 ": true,
    "cursor-pointer": true,
  });
  return (
    <div className='w-full'>
      <ul>
        <Link to='/'>
          <li className={bag}>
            <FaBook/>
            <p className='text-center w-full caret-transparent text-sm'>
              Make Attendence
            </p>
          </li>
        </Link>
        <Link to='/view'>
          <li className='flex items-center justify-between py-3 cursor-pointer '>
            <FaBookOpenReader />
            <p className='text-center w-full caret-transparent text-sm'>
              View Attendence
            </p>
          </li>
        </Link>
        <li className='flex  items-center justify-between py-3 cursor-pointer '>
          <BiLogInCircle />
          <p className='text-center w-full outline-none caret-transparent text-sm'>
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
}

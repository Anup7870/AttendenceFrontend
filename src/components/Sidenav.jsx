import React from 'react'
// import {AutoStoriesOutlinedIcon} from '@mui/icons-material/AutoStoriesOutlined';
// import {GradingOutlinedIcon} from '@mui/icons-material/GradingOutlined';
// import {LogoutOutlinedIcon} from '@mui/icons-material/LogoutOutlined';
export default function Sidenav() {
  return (
    <div className=''>
      <ul>
        <li>
          {/* <AutoStoriesOutlinedIcon/> */}
          <p>Make Attendence</p>
        </li>
        <li>
          {/* <GradingOutlinedIcon/> */}
          <p>View Attendence</p>
        </li>
        <li>
          {/* <LogoutOutlinedIcon/> */}
          <p>Logout</p>
        </li>
      </ul>
    </div>
  )
}

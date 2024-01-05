import { useEffect, useState } from "react";
import "./App.css";
import Scanner from "./components/Scanner";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Attendence from "./components/Attendence";
import Sidenav from "./components/Sidenav";
import View from "./components/View";
import { useContext } from "react";
import Context from "./Context";
import axios from "axios";
//components not main function
const Main = () => {
  return (
    <div className='w-full h-main flex  '>
      <section className='w-[15%] bg-white shadow-sha h-full p-8 '>
        <Sidenav />
      </section>
      <section className='w-[84%] h-full'>
        <Routes>
          <Route path='/' element={<Attendence />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </section>
    </div>
  );
};

// main function

function App() {
  const context = useContext(Context);
  useEffect(() => {
    if (sessionStorage.getItem("login") === "true") {
      const token = "Bearer " + sessionStorage.getItem("token");
      console.log(token);
      const api = axios
        .get("http://localhost:3000/teacher/auth/token", {
          headers: { Authorization: `${token}` },
        })
        .then((data) => {
          context.setUser(data.data.data);
          console.log(context.user);
        });
      context.setLogin(true);
    } else context.setLogin(false);
  }, []);
  return (
    <>
      <div className='w-screen h-screen md:h-screen md:w-screen bg-[#EDF1F7] overflow-auto'>
        <Nav />
        {context.login ? <Main /> : <Login />}
      </div>
    </>
  );
}

export default App;

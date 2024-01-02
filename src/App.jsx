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
//components not main function
const Main = ()=>{
  return (
    <div className='w-full h-main flex  '>
      <section className='w-[15%] bg-white shadow-sha h-full p-8 '>
        <Sidenav/>
      </section>
      <section className='w-[84%] h-full'>
      <Routes>
          <Route path='/' element={<Attendence/>} />
          <Route path="/view" element={<View/>}/>
        </Routes>
      </section>
    </div>
  )
  
}

// main function


function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("login") === "true") {
      context.setLogin(true);
    }
    else{
      context.setLogin(false);
    }
  },[])
  return (
    <>
      <div className='w-screen h-screen md:h-screen md:w-screen bg-[#EDF1F7] overflow-auto'>
        <Nav />
        {context.login? <Main/>:<Login/>}
      </div>
    </>
  );
}

export default App;

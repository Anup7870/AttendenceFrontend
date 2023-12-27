import { useState } from "react";
import "./App.css";
import Scanner from "./components/Scanner";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className='w-screen h-screen bg-[#EDF1F7]'>
        <Nav />
        <Routes>
          <Route path='/' element={isLogin ? <Main /> : <Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

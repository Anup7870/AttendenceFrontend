import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [attInfo, setAttInfo] = useState({});
  const [apply,setApply] = useState(false);
  const [trigger,SetTrigger] = useState(0);
  return (
    <Context.Provider
      value={{ user, setUser, login, setLogin, attInfo, setAttInfo,apply,setApply,SetTrigger,trigger }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

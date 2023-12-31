import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [attInfo, setAttInfo] = useState({});
  return (
    <Context.Provider
      value={{ user, setUser, login, setLogin, attInfo, setAttInfo }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

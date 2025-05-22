import { createContext, useState } from "react";
import Data from "./data.json";
export const Context = createContext();

function DataContext({ children }) {
  const [data, setData] = useState(Data);
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}

export default DataContext;

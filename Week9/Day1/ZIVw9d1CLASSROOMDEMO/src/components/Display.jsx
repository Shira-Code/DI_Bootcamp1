import ShowCounter from "./ShowCounter";
import Input from "./Input";
import ShowInput from "./ShowInput";

import { useState, createContext } from "react";

/**
 * createContext
 * Share this context - Provider value={}
 * useContext
 */

export const DisplayContext = createContext();

const Display = (props) => {
  const [input, setInput] = useState();
  return (
    <>
      <h2>Display</h2>
      <ShowCounter />
      <DisplayContext.Provider value={{ input, setInput }}>
        <Input />
        <ShowInput />
      </DisplayContext.Provider>
    </>
  );
};
export default Display;

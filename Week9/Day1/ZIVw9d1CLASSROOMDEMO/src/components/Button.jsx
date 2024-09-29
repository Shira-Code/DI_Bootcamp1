import { useContext } from "react";
import { AppContext } from "../App";
const Button = (props) => {
  const { setCount, name } = useContext(AppContext);
  return (
    <>
      <h2>Button {name}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </>
  );
};
export default Button;

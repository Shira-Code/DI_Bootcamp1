import { useContext } from "react";
import { DisplayContext } from "./Display";

const ShowInput = (props) => {
  const { input } = useContext(DisplayContext);
  return (
    <>
      <h2>ShowInput</h2>
      {input}
    </>
  );
};
export default ShowInput;

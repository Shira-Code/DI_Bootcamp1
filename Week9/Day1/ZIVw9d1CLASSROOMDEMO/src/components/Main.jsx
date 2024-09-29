import { useContext } from "react";
import { ThemeModeContext } from "../App";

const Main = (props) => {
  const { themeMode } = useContext(ThemeModeContext);
  return (
    <div className={themeMode === "light" ? "light" : "dark"}>
      <h2>Main </h2>
      <h3>Current Theme: {themeMode}</h3>
    </div>
  );
};
export default Main;

import { useContext } from "react";
import { ThemeModeContext } from "../App";

const Header = (props) => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  return (
    <div className={themeMode === "light" ? "light" : "dark"}>
      <h2>Header </h2>
      <h3>Current Theme: {themeMode}</h3>
      <button
        onClick={() =>
          setThemeMode((mode) => (mode === "light" ? "dark" : "light"))
        }
      >
        {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};
export default Header;

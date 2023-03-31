import "./navbar.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
      </div>
    </div>
  );
};

export default Navbar;

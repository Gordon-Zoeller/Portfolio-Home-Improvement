import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Title() {
    return (
        <>
            <h1><NavLink className="h1" to="/">Home Improvement</NavLink></h1>
        </>
    );
};
//<img src={logo} alt="Home Improvement Logo" />
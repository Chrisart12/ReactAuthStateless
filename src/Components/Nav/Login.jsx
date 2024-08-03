
import { NavLink } from "react-router-dom";
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu

export default function Login() {


    return (
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
        </li>
    );
}

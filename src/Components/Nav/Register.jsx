import { NavLink } from "react-router-dom";
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu

export default function Register() {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to="/register">
                Register
            </NavLink>
        </li>
    );
}

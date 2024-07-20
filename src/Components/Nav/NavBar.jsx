import {Link, NavLink } from "react-router-dom";
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu

export default function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                Produits
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/edittitle">
                                EditTitle
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/timer">
                                Timer
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/useMemo">
                            useMemo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/useRef">
                            useRef
                            </NavLink>
                        </li>

                        
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="/">
                                    Action
                                </a>
                                <a className="dropdown-item" href="/">
                                    Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    Something else here
                                </a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                            Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                            Register
                            </NavLink>
                        </li>
                       
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                </div>
            </nav>
    );
}

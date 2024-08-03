import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import axiosBaseURL from '../../api/axios';
import { useNavigate  } from "react-router-dom";
import Logout from "./Logout"
import Login from "./Login"
import Register from "./Register"
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu

export default function NavBar() {

    const user = useSelector((state) => state.user.user);
    // const token = useSelector((state) => state.auth.auth);
    // let navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const headers = { 'Authorization': `Bearer ${token.access_token}`  };
    //     axiosBaseURL.post(`logout`, '', {headers})
        
    //         .then(res => {
    //             if (res.data) {
    //                 localStorage.clear();
    //                 navigate("/login")
    //                 // navigate(0) permet de recharger la page
    //                 navigate(0)
    //             }
                
    //         }).catch(error => {
    //             console.log("eeeeeeeeeeeeeee", error);
    //         })
        

    // }



    return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"> 
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
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
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
                    </ul>

                    <ul
                    className="navbar-nav">
                        {
                            user ?
                                // <li className="nav-item dropdown">
                                //     <a
                                //         className="nav-link dropdown-toggle"
                                //         href="#"
                                //         id="navbarDropdown"
                                //         role="button"
                                //         data-bs-toggle="dropdown"
                                //         aria-haspopup="true"
                                //         aria-expanded="false"
                                //     >
                                //         Issa
                                //     </a>
                                //     <div
                                //         className="dropdown-menu "
                                //         aria-labelledby="navbarDropdown"
                                //     >
                                //          <form onSubmit={handleSubmit}>
                                //            <input type="submit" value="Se déconnecter" /> 
                                //          </form>
                                       

                                //     </div>
                                // </li>
                                <Logout />
                            :

                            <>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
        
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                    Register
                                    </NavLink>
                                </li> */}
                                <Login />
                                <Register />
                            </>
                           
                        }
            
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

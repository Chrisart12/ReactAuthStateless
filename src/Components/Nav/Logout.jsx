
import {  useSelector } from "react-redux";
import axiosBaseURL from '../../api/axios';
import { useNavigate  } from "react-router-dom";
// NavLInk contrairemetent à Link permet de savoir si la page est chargée ou pas afin de rajouter active au menu

export default function Logout() {

    
    const token = useSelector((state) => state.auth.auth);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const headers = { 'Authorization': `Bearer ${token.access_token}`  };
        axiosBaseURL.post(`logout`, '', {headers})
        
            .then(res => {
                if (res.data) {
                    localStorage.clear();
                    navigate("/login")
                    // navigate(0) permet de recharger la page
                    navigate(0)
                }
                
            }).catch(error => {
                console.log("eeeeeeeeeeeeeee", error);
            })
    }


    return (
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
                Issa
            </a>
            <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdown"
            >
                <form onSubmit={handleSubmit}>
                {/* <div className="dropdown-item">Se déconnecter</div> */}
                <input type="submit" value="Se déconnecter" /> 
                </form>
            

            </div>
        </li>
    );
}

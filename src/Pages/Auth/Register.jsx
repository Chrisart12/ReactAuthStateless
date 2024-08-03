import NavBar from "../../Components/Nav/NavBar";
import { useState, useEffect } from "react";
import Input from "../../Components/Forms/Input";
import InputLabel from "../../Components/Forms/InputLabel";
import {Link, useNavigate  } from "react-router-dom";
import {  useSelector } from "react-redux";
// import axios from 'axios';
import axiosBaseURL from '../../api/axios';


export default function Register() {

    const user = useSelector((state) => state.user.user);

    let navigate = useNavigate();
   
    // const [firstname, setFirstname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            firstname: firstname,
            lastname: lastname, 
            email: email,
            password: password,
            password_confirmation: password_confirmation

        };
        // JSON.stringify(user) séréalisation en Symfony
        // Pas besoin en Laravel
        axiosBaseURL.post(`register`, user)
        
            .then(res => {
                console.log("kkdkdkffdk", res)
                if (res.data) {
                    console.log(res.data)
                    return navigate("/login")
                }
                
            }).catch(error => {
                console.log("eeeeeeeeeeeeeee", error);
            })

    }

    // Check auth
    useEffect(() => {
  
        if (user) {
            navigate('/')
        }
    }, [])



    return (
        <>
            <NavBar />
            <section
                className="vh-100 bg-image register_img"
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div
                                    className="card register-card"
                                >
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>

                                        <form onSubmit={handleSubmit}>

                                        <div className="mb-4">
                                            <InputLabel
                                                htmlFor="firstname"
                                                className="form-label"
                                                label="Prénom"
                                            />
                                            <Input
                                                className="form-control form-control-lg"
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Prénom" 
                                                value={firstname}
                                                // onChange={setTitle}
                                                onChange={(e) => setFirstname(e.target.value)}

                                            />
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel
                                                htmlFor="lastname"
                                                className="form-label"
                                                label="Nom"
                                            />
                                            <Input
                                                className="form-control form-control-lg"
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Lastname" 
                                                value={lastname}
                                                // onChange={setTitle}
                                                onChange={(e) => setLastname(e.target.value)}
                                                
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel
                                                htmlFor="email"
                                                className="form-label"
                                                label="Email"
                                            />
                                            <Input
                                                className="form-control form-control-lg"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email" 
                                                value={email}
                                                // onChange={setTitle}
                                                onChange={(e) => setEmail(e.target.value)}
                                                
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel
                                                htmlFor="password"
                                                className="form-label"
                                                label="Mot de passe"
                                            />
                                            <Input
                                                className="form-control form-control-lg"
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Password" 
                                                value={password}
                                                // onChange={setTitle}
                                                onChange={(e) => setPassword(e.target.value)}
                                                
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel
                                                htmlFor="password_confirmation"
                                                className="form-label"
                                                label="Confirmer le mot de passe"
                                            />
                                            <Input
                                                className="form-control form-control-lg"
                                                type="password"
                                                name="password_confirmation"
                                                id="password_confirmation"
                                                placeholder="Confirmer le mot de passe" 
                                                value={password_confirmation}
                                                // onChange={setTitle}
                                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                
                                            />
                                        </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                >
                                                    Register
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                {/* <a
                                                    href="#!"
                                                    className="fw-bold text-body"
                                                >
                                                    <u>Login here</u>
                                                </a> */}
                                                <Link className="nav-link" to="/login">
                                                    <u>Login here</u>
                                                </Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

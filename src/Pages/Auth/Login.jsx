import NavBar from "../../Components/Nav/NavBar";
import { useState, useEffect } from "react";
import Input from "../../Components/Forms/Input";
import InputLabel from "../../Components/Forms/InputLabel";
import { useNavigate  } from "react-router-dom";
import axios from '../../api/axios';

import { useDispatch } from "react-redux";
import { login } from '../../redux/user/userAction'



export default function Login() {

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: email,
            password: password,

        };

        dispatch(login(user))

        // axios.post(`login`, JSON.stringify(user), {
        //     headers: {
        //         'Content-type': 'application/json',

        //     },
        //     credentials: true
        // }).then(res => {
        //         if (res.data.token) {

        //             console.log("eeeeee", res.data.token)
        //             // return navigate("/product")
        //         }
                
        // }).catch(error => {
        //         console.log("eeeeeeeeeeeeeee", error);
        // })

    }

   
    return (
        <>
            <NavBar />
            {/* <div className="container mt-5"> */}
                <section className="vh-100 login-section">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong login-div">
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Sign in</h3>

                                        <form onSubmit={handleSubmit}>
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
                                                    placeholder="Mot de passe" 
                                                    value={password}
                                                    // onChange={setTitle}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    
                                                />
                                            </div>

                                            <button
                                                className="btn btn-primary btn-lg btn-block"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </form>

                                       

                                        <hr className="my-4" />

                                        <button
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-lg btn-block btn-primary login-btn-pri mb-3"
                                            type="submit"
                                        >
                                            <i className="fab fa-google me-2"></i>{" "}
                                            Sign in with google
                                        </button>
                                        <button
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-lg btn-block btn-primary mb-2 login-btn-second"
                                            type="submit"
                                        >
                                            <i className="fab fa-facebook-f me-2"></i>
                                            Sign in with facebook
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* </div> */}
        </>
    );
}

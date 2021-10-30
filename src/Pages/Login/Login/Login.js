import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setIsLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirects_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirects_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <div className="container   login_container">
                <div className="row  justify-content-center ">
                    <h1 className="text-warning my-3">  <i class="fa fa-lock" aria-hidden="true"></i> Please Login </h1>


                    <div className="col-12 col-lg-4 ">
                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-info m-3 text-white">Login with Google </button>

                        <br /> <center><div style={{ border: '1px solid black', height: '1px', width: '300px' }}></div></center><br />


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
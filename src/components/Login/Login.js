import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const useGoogleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Please Login</h1>
                    <input placeholder="Your Email" type="email"{...register("example")} />
                    <input placeholder="Password" type="password" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <p>This field is required</p>}

                    <input type="submit" value="Login" />
                    <h4>-----------or continue with-------------</h4>
                </form>
            </div>
            <div>
                <button onClick={useGoogleSignIn} style={{ backgroundColor: 'salmon', padding: "15px 40px", cursor: "pointer", border: "none", fontSize: "16px", color: "white", fontWeight: "bold", borderRadius: "5px" }}>Google</button>
            </div>
        </div>
    );
};

export default Login;
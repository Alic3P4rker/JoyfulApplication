import { Link, useNavigate } from 'react-router-dom';
import './login-pages.css';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

function LoginPage()
{
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        fetch('http://localhost:5133/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailAddress,
                password
            })
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.accessToken) {
                console.log('Login successful');
                localStorage.setItem('accessToken', responseData.accessToken);
                localStorage.setItem('refreshToken', responseData.refreshToken);

                const decodedToken = jwtDecode(responseData.accessToken);
                navigate(`/dashboard/${decodedToken.sub}`);
            } else {
                console.error('Login failed — no access token');
                toast.error('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            toast.error('Login failed. Please check your credentials.');
        });
    }
    

    return (
        <div className='loginPage'>
            <div className='container'>
                <b className='h5'>Project Tiergarten</b>

                <div className='welcomeParent'>
                    <b className='h3'>Welcome!</b>
                    <b className='h3'>Login into your account</b>
                </div>

                <div className='inputParent'>
                    <div className='inputContainer'>
                        <label className="form-label">Email</label>
                        <input 
                            className="form-control" 
                            placeholder='example@email.com'
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                    </div>

                    <div className='inputContainer'>
                        <label className="form-label">Password</label>
                        <input 
                            className="form-control" 
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn site-color" onClick={handleLogin}>Continue</button>
                </div>

                <div className='linkParent'>
                    <b className='h6'>Forgot your password? 
                        <Link className="ms-2" to="">Reset it</Link>
                    </b>
                    <b className='h6'>Don't have an account? 
                        <Link className="ms-2" to='/createaccount'>Sign up</Link>
                    </b>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;
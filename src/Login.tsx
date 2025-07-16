import { Link } from 'react-router-dom';
import './login-pages.css';

function LoginPage()
{
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
                        <input className="form-control" placeholder='example@email.com'/>
                    </div>

                    <div className='inputContainer'>
                        <label className="form-label">Password</label>
                        <input className="form-control" placeholder='Enter your password'/>
                    </div>

                    <button type="button" className="btn site-color">Continue</button>
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
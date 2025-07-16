import { useNavigate } from 'react-router-dom';
import './login-pages.css';

function CreateAccountPage()
{
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        // Logic to create account goes here
        navigate('/verifyaccount'); // Redirect to verify account page after creation
    };

    return (
        <div className='loginPage'>
            <div className='container'>
                <b className='h5'>Project Tiergarten</b>

                <b className='h3'>Create Account</b>

                <div className='inputParent'>
                    <div className='inputContainer'>
                        <label className="form-label">Email</label>
                        <input className="form-control" placeholder='example@email.com'/>
                    </div>

                    <div className='inputContainer'>
                        <label className="form-label">Password</label>
                        <input className="form-control" placeholder='Enter your password'/>
                    </div>

                    <div className='inputContainer'>
                        <label className="form-label">Confirm Password</label>
                        <input className="form-control" placeholder='Re-enter your password'/>
                    </div>

                    <button type="button" onClick={handleCreateAccount} className="btn site-color" >Create Account</button>
                </div>

                <a href='#'>Are you an organiser?</a>

            </div>
        </div>
    )
}

export default CreateAccountPage;
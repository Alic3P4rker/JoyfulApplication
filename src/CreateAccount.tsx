import { useNavigate } from 'react-router-dom';
import './login-pages.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

function CreateAccountPage()
{
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            toast.error('Passwords do not match. Please try again.');
            return;
        }

        fetch('http://localhost:5133/api/User/create-new-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailAddress,
                password,
            })
        })
        .then (async(response) => {
            const data = await response.json();
            if (response.status === 201) {
                console.log('Account created successfully');
                navigate(`/verifyaccount/${data.id}`);
            } else {
                console.error('Account creation failed:', data.message);
                alert(`Account creation failed: ${data.message}`);
                toast.error('An error occurred during account creation. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error during account creation:', error);
            toast.error('An error occurred during account creation. Please try again later.');
        })

    };

    return (
        <div className='loginPage'>
            <div className='container'>
                <b className='h5'>Project Tiergarten</b>

                <b className='h3'>Create Account</b>

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

                    <div className='inputContainer'>
                        <label className="form-label">Confirm Password</label>
                        <input 
                            className="form-control"
                            placeholder='Re-enter your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={handleCreateAccount} className="btn" >Create Account</button>
                </div>

                <a href='#'>Are you an organiser?</a>

            </div>
        </div>
    )
}

export default CreateAccountPage;
import { useState } from 'react';
import './login-pages.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function VerifyAccountPage()
{
    const { id } = useParams();
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();


    const handleVerifyAccount = () => {
        fetch('http://localhost:5133/api/Account/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                otp
            })
        })
        .then (async(response) => {
            if (response.ok) {
                console.log('Account verified successfully');
                navigate(`/dashboard/${id}`);
            } else {
                toast.error('Account verification failed. Please check your code and try again.');
                alert(`Account verification failed`);
            }
        })
        .catch(error => {  
            console.error('Error during account verification:', error);
            toast.error('Account verification failed. Please check your code and try again.');
        })
    };

    return (
        <div className='loginPage'>
            <div className='container'>
                <b className='h5'>Project Tiergarten</b>

                <b className='h3'>Verify your account</b>

                <div className='inputParent'>
                    <div className='inputContainer'>
                        <label className="form-label">Enter verfication code</label>
                        <input 
                            className="form-control" 
                            placeholder='012-345'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={handleVerifyAccount} className="btn site-color">Verify Account</button>
                </div>

                <a href='#'>Resend verification code?</a>

            </div>
        </div>
    )
}

export default VerifyAccountPage;

import './login-pages.css';

function VerifyAccountPage()
{
    return (
        <div className='loginPage'>
            <div className='container'>
                <b className='h5'>Project Tiergarten</b>

                <b className='h3'>Verify your account</b>

                <div className='inputParent'>
                    <div className='inputContainer'>
                        <label className="form-label">Enter verfication code</label>
                        <input className="form-control" placeholder='012-345'/>
                    </div>

                    <button type="button" className="btn site-color">Verify Account</button>
                </div>

                <a href='#'>Resend verification code?</a>

            </div>
        </div>
    )
}

export default VerifyAccountPage;

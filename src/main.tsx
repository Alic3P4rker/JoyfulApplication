import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Login.tsx';
import CreateAccountPage from './CreateAccount.tsx';
import VerifyAccountPage from './VerifyAccount.tsx';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route path="/verifyaccount" element={<VerifyAccountPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

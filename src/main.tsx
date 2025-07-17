import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Login.tsx';
import CreateAccountPage from './CreateAccount.tsx';
import VerifyAccountPage from './VerifyAccount.tsx';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.tsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route path="/verifyaccount/:id" element={<VerifyAccountPage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

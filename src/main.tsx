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
import HomePage from './pages/Home.tsx';
import ProfilePage from './pages/Profile.tsx';
import EventPage from './pages/Event.tsx';
import PostPage from './pages/Post.tsx';
import MessagePage from './pages/Message.tsx';
import CreatePage from './pages/Create.tsx';
import SettingsPage from './pages/Settings.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route path="/verifyaccount/:id" element={<VerifyAccountPage />} />

        <Route path="/dashboard/:id" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="posts" element={<PostPage />} />
          <Route path="messages" element={<MessagePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

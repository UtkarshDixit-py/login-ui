import './App.css';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import LoggedIn from './pages/LoggedIn'
import OtpPage from './pages/OtpPage';
import {Route , Routes } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<SigninPage />}/>
      <Route path="signup" element={<SignupPage />} />
      <Route path="verification" element={<OtpPage />}/>
      <Route path="forgotpassword" element={<ForgotPassword/>} />
      <Route path="loggedin" element={<LoggedIn/>} />
    </Routes>
    
  );
}

export default App;

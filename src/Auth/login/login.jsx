import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../plugins/axios';
import { Link, useNavigate} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Snackbar from '@mui/material/Snackbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('accounts/token/login/', {
        username: username,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.auth_token);
      // Redirect the user to the homepage or the page you want to show after login
      navigate("/home");
    } catch (error) {
      console.error("Invalid Username or Password");
      console.error(error);
      setErrorMessage('Invalid Username or Password');
      setOpen(true);
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ backgroundColor: 'rgba(29, 110, 99, .5)', position: 'relative' }}>
        <CardContent>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20rem' }}>
          <Logo />
            <p>Login</p>
            <TextField
              style={{ margin: '1rem' }}
              label="Username"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value) } required
            />
            <TextField
              style={{ margin: '1rem' }}
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)} required
            />
            <Button
              style={{ margin: '1rem', backgroundColor: 'rgba(245, 69, 69, .80)' }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
          <p >
        Don't Have an Account? <Link to="/register" style={{ color: 'white' }}>Register</Link>
      </p>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        message={errorMessage}
      />
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;

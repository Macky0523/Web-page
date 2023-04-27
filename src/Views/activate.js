import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../plugins/axios'
import { Link, useNavigate} from 'react-router-dom';
import LockPersonIcon from '@mui/icons-material/LockPerson';



function Activate() {
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('accounts/activation/', {
        ui:uid,
        token:token,
      });
      console.log(response.data);
      // Redirect the user to the homepage or the page you want to show after login
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative' }}>
        <CardContent>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20rem' }}>
          <LockPersonIcon color="secondary"/>
            <p>Login</p>
            <TextField
              style={{ margin: '1rem' }}
              label="Uid"
              variant="outlined"
              value={uid}
              onChange={(event) => setUid(event.target.value) } required
            />
            <TextField
              style={{ margin: '1rem' }}
              label="Token"
              variant="outlined"
              value={token}
              onChange={(event) => setToken(event.target.value)} required
            />
            <Button
              style={{ margin: '1rem' }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Activate
            </Button>
          </form>
          <p >
        Already have an account? <Link to="/">Login</Link>
      </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Activate;

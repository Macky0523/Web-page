import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from '../plugins/axios'

function BookingPage() {
  const navigate = useNavigate();
  const [Problem, setProblem] = useState('');
  const [Additional_Info, setAdditional_Info] = useState('');
  const [user_loc, setLocation] = useState('');
  const [id, setId] = useState('');

  const handleTitleChange = (e) => {
    setProblem(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setAdditional_Info(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRequest = async () => {
    const token = localStorage.getItem('token');
  
    axios.get('accounts/users/me',{
      headers: {
        'Authorization' : `Token ${token}`
      }
    }).then(response => {
      setId(response.data.id)
    }).catch((error)=>{
      if (error.response.status === 401){
        navigate('/');
      }
    })
    const data = {
      user_loc: user_loc,
      requester: id,
      Problem : Problem,
      Additional_Info : Additional_Info,



    };
  
    console.log('Request data:', data); // Log the request data
  
    try {
      const response = await axios.post('post/', data, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
  
      console.log('Response data:', response.data); // Log the response data
  
      navigate('/home');
    } catch (error) {
      console.error('Request error:', error); // Log the error
    }
  };
  
  
  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Booking Page
      </Typography>
      <TextField
        label="Location"
        value={user_loc}
        onChange={handleLocationChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        value={Problem}
        onChange={handleTitleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={Additional_Info}
        onChange={handleDescriptionChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      
      <Button variant="contained" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" onClick={handleRequest}>
        Request
      </Button>
    </Container>
  );
}

export default BookingPage;

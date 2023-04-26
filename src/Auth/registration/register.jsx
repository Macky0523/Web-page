import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuItem from '@mui/material/MenuItem';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    'email':'',
    'password':'',
    'first_name':'',
    'last_name':'',
    'birthdate': null,
    'gender':'',
    'username': ''
    
  });

  const Gender = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];



 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative' }}>
      <CardContent>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20rem' }}>
        <PersonPinIcon color="secondary"/>
          <p>Register</p>
          <TextField
            style={{ margin: '1rem' }}
            label="First Name"
            variant="outlined"
            value={formData.first_name}
            onChange={(event) => setFormData(event.target.value) } required
          />
          <TextField
            style={{ margin: '1rem' }}
            label="Last Name"
            variant="outlined"
            value={formData.last_name}
            onChange={(event) => setFormData(event.target.value) } required
          />
          <TextField
            style={{ margin: '1rem' }}
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={(event) => setFormData(event.target.value) } required
          />
          <TextField
            type = "email"
            style={{ margin: '1rem' }}
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={(event) => setFormData(event.target.value) }  required
          />
          <TextField
            type='password'
            style={{ margin: '1rem' }}
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={(event) => setFormData(event.target.value) } required
          />
          <TextField
            type ="date"
            style={{ margin: '1rem' }}
            label="Birtdate"
            variant="outlined"
            value={formData.birthdate}
            onChange={(event) => setFormData(event.target.value) } required
          />
        <TextField
          id="Select Gender"
          select
          label="Select"
          defaultValue={formData.gender}
          helperText="Please select your Gender"
          onChange={(event) => setFormData(event.target.value) } required
          >
          {Gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} required
        </TextField>



          <Button onClick={() => {
                axios.post('http://localhost:8000/api/v1/accounts/users/', formData)}}
            style={{ margin: '1rem' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
        <p >
      Create Account? <Link to="/login">Login</Link>
    </p>
      </CardContent>
    </Card>
  </div>
);
};

export default RegistrationPage;

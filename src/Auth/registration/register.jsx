import React, { useState } from 'react';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import axios from '../../plugins/axios';
  import { Link, useNavigate} from 'react-router-dom';
  import LockPersonIcon from '@mui/icons-material/LockPerson';
  import MenuItem from '@mui/material/MenuItem';
  
  
  function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
  
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
  
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('accounts/users/', {
            username: username,
            password: password,
            email: email,
            birthdate: birthdate,
            first_name:first_name,
            last_name:last_name,
            gender:gender,
          });
        console.log(response.data);
        navigate("/activate")
        // Redirect the user to the homepage or the page you want to show after logi
      } catch (error) {
        console.error("Invalid Entry");
        console.error(error);
      }
    };
  
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ backgroundColor: 'rgba(29, 110, 99, .5)', position: 'relative' }}>
          <CardContent>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20rem' }}>
            <LockPersonIcon color="secondary"/>
              <p>Register</p>
              <TextField
                style={{ margin: '1rem' }}
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} required
              />
              <TextField
                style={{ margin: '1rem' }}
                label="First Name"
                variant="outlined"
                value={first_name}
                onChange={(event) => setFirstName(event.target.value)} required
              />
              <TextField
                style={{ margin: '1rem' }}
                label="Last Name"
                variant="outlined"
                value={last_name}
                onChange={(event) => setLastName(event.target.value)} required
              />
              
              <TextField
                style={{ margin: '1rem' }}
                label="Username"
                variant="outlined"
                value={username}
                onChange={(event) => setUsername(event.target.value) } required
              />
              <TextField
                style={{ margin: '1rem' }}
                label="Birth Date"
                variant="outlined"
                type = "date"
                value={birthdate}
                onChange={(event) => setBirthdate(event.target.value) } required
              />
  
              <TextField
                style={{ margin: '1rem' }}
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} required
              />
              <TextField
            id="Select Gender"
            select
            label="Select"
            defaultValue={gender}
            helperText="Please select your Gender"
            onChange={(event) => setGender(event.target.value) } required
            >
            {Gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} required
          </TextField>
              <Button
                style={{ margin: '1rem', backgroundColor: 'rgba(245, 69, 69, .80)' }}
              variant="contained"
              color="primary"
              type="submit"
              >
                Proceed
              </Button>
            </form>
            <p >
          Already have Account? <Link to="/">Login</Link>
        </p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default Register;
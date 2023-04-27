import { useEffect, useState } from "react";
import axios from "../plugins/axios";
import { Navigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Profile (){
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = Navigate


  useEffect(()=> {
    const token = localStorage.getItem('token')
    axios.get('accounts/users/me',{
      headers: {
        'Authorization' : `Token ${token}`
      }
    }).then(response => {
      setEmail(response.data.email);
      setUsername(response.data.username);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
    }).catch((error)=>{
      if (error.response.status === 401){
        navigate('/');
      }
    })
  })
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', position: 'relative' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Profile
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Username: {username}
          </Typography>
          <Typography variant="body1" gutterBottom>
            First Name: {firstName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Last Name: {lastName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
import { Grid, Paper, Typography,Container, List, Button, IconButton, CardActions  } from "@mui/material";
import NavBar from "../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "../plugins/axios";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from "@mui/icons-material/Delete";

function LandingPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

      useEffect(()=> {
        const token = localStorage.getItem('token')
        axios.get('accounts/users/me',{
          headers: {
            'Authorization' : `Token ${token}`
          }
        }).then(response => {
          setFirstName(response.data.first_name);
          setLastName(response.data.last_name);
        }).catch((error)=>{
          if (error.response.status === 401){
            navigate('/');
          }
        })
      })

      const [requests, setRequests] = useState([]);
      useEffect(() => {
        const token = localStorage.getItem('token');
        axios
          .get('post/', {
            headers: {
              'Authorization': `Token ${token}`
            }
          })
          .then((response) => {
            // Log the fetched data
            console.log(response.data);
            // Set the fetched data to the 'requests' state
            setRequests(response.data);
          })
          .catch((error) => {
            // Handle error
            console.error('Error fetching data:', error);
          });
      }, []);


      const handleLogout = async () => {
        try {
          const token = localStorage.getItem('token');
      
          await axios.post('/accounts/token/logout/', null, {
            headers: {
              'Authorization': `Token ${token}`
            }
          });  
          // Clear the token from local storage
          localStorage.removeItem('token');
          // Redirect to the login page
          navigate('/login');
        } catch (error) {
          // Handle error
          console.log('Logout error:', error);
        }
      };

      const handleGoToRequestPage = () => {
        navigate('/booking'); // Replace '/booking' with the actual URL of the booking/request page
      };
      
      const handleDeleteRequest = async (requestId) => {
        try {
          // Make a DELETE request to delete the request with the specified ID
          const response = await axios.delete(`post/${requestId}/`);
          console.log(response.data); // Log the response data for debugging purposes
      
          // If the request is successfully deleted, update the list of requests
          setRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId));
        } catch (error) {
          console.log("Error deleting request:", error);
        }
      };


  return (
    <Container maxWidth="lg" style={{ backgroundColor: 'rgba(227, 12, 5, 0.5)' }}>
    <NavBar onLogout={handleLogout} />

    <Grid container spacing={2}>
      {/* Left section - User Profile */}
      <Grid item xs={12} sm={4}>
        <Paper style={{ position: 'relative' }}>
          <Typography variant="h5" align="center" sx={{ p: 2 }}>
            User Profile
          </Typography>
          {
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Welcome!  {firstName}, {lastName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Rating: 5/5
          </Typography>
        </CardContent>
      </Card>
          }
        </Paper>
      </Grid>

      {/* Center section - Transactions History */}
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h5" align="center" sx={{ p: 2 }}>
            Booking
          </Typography>
          <Button align="center" variant="contained" color="primary" onClick={handleGoToRequestPage}>
            Request
          </Button>
          <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <List>
            {requests
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((request) => (
                <Card key={request.id} variant="outlined" style={{ marginBottom: "1rem" }}>
                  <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Requester: {firstName} {lastName} {/* Replace "name" with the actual attribute of the User model */}
                  </Typography>
                    <Typography variant="h6" gutterBottom>
                      Problem: {request.Problem}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Info: {request.Additional_Info}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Location: {request.user_loc}
                    </Typography>
                    {/* Add any additional information you want to display */}
                  </CardContent>
                  <CardActions>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteRequest(request.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
          </List>
          </div>
        </Paper>
      </Grid>

      {/* Right section - Messages */}
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h5" align="center" sx={{ p: 2 }}>
            Messages
          </Typography>
          {/* Add messages content here */}
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
}

export default LandingPage;

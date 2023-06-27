import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import Logo from "../logo/logo";

function NavBar({ onLogout }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(29, 110, 99, 1)'}}>
      <Toolbar>
        <Logo alt="Logo" width={100} height={50} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            Auto Rescue
        </Typography>
        <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
          Logout
        </Typography>
        <IconButton color="inherit" onClick={onLogout}>
          <Logout />
          
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

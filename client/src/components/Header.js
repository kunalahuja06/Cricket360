import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import './ComponentStyles.css'
import {Link} from 'react-router-dom'
import {useAuth} from '../authContext'
import {useNavigate} from 'react-router-dom'

const settings = ["Profile", "Logout"];

const Navbar = () => {
  const navigate=useNavigate()
  const [{user,username},dispatch]=useAuth()
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser=()=>{
    handleCloseUserMenu()
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  }

  return (
    <div className="container">
      <AppBar position="static" style={{ backgroundColor: "#0A1929" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontWeight="bold"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Cricket360
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Cricket360
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0 }}>
              {user === null ? (
                <>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      className="userButton"
                      onClick={"/login"}
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button variant="contained" className="userButton">
                      Register
                    </Button>
                  </Link>
                </>
              ) : (
                <Tooltip title="Open settings">
                  <AccountBoxIcon
                    onClick={handleOpenUserMenu}
                    fontSize={"large"}
                  ></AccountBoxIcon>
                </Tooltip>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    className="headerSidebarMenu"
                    key={setting}
                    onClick={logoutUser}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;

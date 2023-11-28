import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Categories from "../../pages/Categories";
import AddCategory from "../../pages/AddCategory";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Button color="inherit">
            <Link to="home">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="about">About</Link>
          </Button>
          <Button color="inherit">
            <Link to="contact">Contact</Link>
          </Button>
          <Button color="inherit">
            <Link to="categories">Categories</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

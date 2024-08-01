import React, { useState } from 'react'
import Logo from '../assets/data-icon.svg'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Navbar = ({isCaptchaPage, scrollToSection}) => {

    const navigate = useNavigate();

    const navigateToCaptchaPage = () => {
        if(isCaptchaPage == true){
            navigate("/order");
        }else{
            navigate("/captcha")
        }
    }
    
    const navigateToHome = (event) => {
        event.preventDefault();
        navigate("//");
    }

    const [openMenu , setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            action: () => navigateToHome(),
          },
          {
            text: 'About',
            icon: <InfoIcon />,
            action: () => scrollToSection('about'),
          },
          {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
            action: () => scrollToSection('testimonials'),
          },
          {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
            action: () => scrollToSection('contact'),
          },
          {
            text: 'Try captcha',
            icon: <ShoppingCartRoundedIcon />,
            action: () => navigateToCaptchaPage(),
          },
    ];

    var buttonString = "";
     if(isCaptchaPage == true) {
        buttonString =  "Order custom dataset";
    }else{
        buttonString = "Try out captcha";
    }

  return (
  <nav>
        <div className="nav-logo-container">
            <a onClick={navigateToHome}>
            <h2 className="nav-logo-text">VERICAPTCHA</h2>
            </a>
        </div>
        <div className="navbar-links-container">
            <a href="" onClick={navigateToHome}>Home</a>
            <button onClick={() => scrollToSection('about')}>
                About
            </button>
            <button onClick={() => scrollToSection('testimonials')}>
                Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')}>
                Contact
            </button>
            <button className='primary-button' onClick={navigateToCaptchaPage}>
                {buttonString} <FiArrowRight />
            </button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
            <List>
                {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            </Box>
        </Drawer>
    </nav>
    )
}

export default Navbar

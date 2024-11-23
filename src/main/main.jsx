import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid2, Drawer, IconButton } from '@mui/material';
import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import OurTeam from '../pages/ourTeam/ourTeam.jsx';
import Portfolio from '../pages/portfolio/portfolio.jsx';
import Contact from '../pages/contact/contact.jsx';
import MenuIcon from '@mui/icons-material/Menu';

function Main() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    document.getElementById(`section-${newValue}`).scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    document.getElementById('section-0').scrollIntoView({ behavior: 'smooth' });
    setValue(0);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabClick = (newValue, sectionId) => {
    setValue(newValue);
    setDrawerOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { sm: '60px', md: '85px', lg: '85px', xl: '90px'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#151925',
          position: 'fixed',
          zIndex: '100000000',
        }}
      >
        <Grid2 container spacing={{ xs: 20, sm: 50, md: 80, lg: 55, xl: 95}} sx={{ whiteSpace: 'nowrap'}}>
          {/* Logo */}
          <Grid2 item>
            <Box
              sx={{
                width: { xs: '60px', sm: '70px', md: '120px', xl: '150px' },
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ml: '47px',
                mt: '5px',
              }}
            >
              <img
                src="././src/assets/imgs/nsd_logo.png"
                onClick={handleLogoClick}
                style={{
                  width: '100%',
                  height: 'auto',
                  cursor: 'pointer',
                  objectFit: 'contain',
                }}
                alt="NSD"
              />
            </Box>
          </Grid2>
          <Grid2 item sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable tabs"
              sx={{ bgcolor: '#151925' }}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Home" sx={{ color: 'white', fontSize: { lg: '19px', xl: '20px'}, ml: '10px', textTransform: 'Capitalize', fontWeight: '600' }} />
              <Tab label="About" sx={{ color: 'white', fontSize: { lg: '19px', xl: '20px'}, ml: '10px', textTransform: 'Capitalize', fontWeight: '600' }} />
              <Tab label="Our Team" sx={{ color: 'white', fontSize: { lg: '19px', xl: '20px'}, ml: '10px', textTransform: 'Capitalize', fontWeight: '600' }} />
              <Tab label="Portfolio" sx={{ color: 'white', fontSize: { lg: '19px', xl: '20px'}, ml: '10px', textTransform: 'Capitalize', fontWeight: '600' }} />
              <Tab label="Contact" sx={{ color: 'white', fontSize: { lg: '19px', xl: '20px'}, ml: '10px', textTransform: 'Capitalize', fontWeight: '600' }} />
            </Tabs>
          </Grid2>

          {/* Mobile Menu icon */}
          <Grid2 item sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white', mt: '10px', mr: '10px' }}>
              <MenuIcon fontSize={'medium'}/>
            </IconButton>
          </Grid2>
        </Grid2>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#151925',
            color: 'white',
            width: '75%',
            paddingTop: '50px',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
          <Tab
            label="Home"
            onClick={() => handleTabClick(0, 'section-0')}
            sx={{ color: 'white', fontSize: {xs: '22px', sm: '26px', md: '28px', lg: '30px'}, fontWeight: '500' }}
          />
          <Tab
            label="About"
            onClick={() => handleTabClick(1, 'section-1')}
            sx={{ color: 'white', fontSize: {xs: '22px', sm: '26px', md: '28px', lg: '30px'}, fontWeight: '500' }}
          />
          <Tab
            label="Our Team"
            onClick={() => handleTabClick(2, 'section-2')}
            sx={{ color: 'white', fontSize: {xs: '22px', sm: '26px', md: '28px', lg: '30px'}, fontWeight: '500' }}
          />
          <Tab
            label="Portfolio"
            onClick={() => handleTabClick(3, 'section-3')}
            sx={{ color: 'white', fontSize: {xs: '22px', sm: '26px', md: '28px', lg: '30px' }, fontWeight: '500' }}
          />
          <Tab
            label="Contact"
            onClick={() => handleTabClick(4, 'section-4')}
            sx={{ color: 'white', fontSize: {xs: '22px', sm: '26px', md: '28px', lg: '30px'}, fontWeight: '500' }}
          />
        </Box>
      </Drawer>

      {/* Sections */}
      <Box id="section-0" sx={{ color: 'white', width: '100%',  height: 'auto', backgroundColor: '#151925', fontFamily: 'Roboto', overflowX: 'hidden' }}>
        <Home />
      </Box>
      <Box id="section-1" sx={{ color: 'white', width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', backgroundColor: '#151925', fontFamily: 'Roboto', overflowX: 'hidden' }}>
        <About />
      </Box>
      <Box id="section-2" sx={{ color: 'white', width: '100%',  height: 'auto', backgroundColor: '#151925', fontFamily: 'Roboto', overflowX: 'hidden' }}>
        <OurTeam />
      </Box>
      <Box id="section-3" sx={{ color: 'white', width: '100%',  height: 'auto', backgroundColor: '#151925', fontFamily: 'Roboto', overflowX: 'hidden' }}>
        <Portfolio />
      </Box>
      <Box id="section-4" sx={{ color: 'white', width: '100%',  height: 'auto', backgroundColor: '#151925', fontFamily: 'Roboto', overflowX: 'hidden' }}>
        <Contact />
      </Box>
    </>
  );
}

export default Main;

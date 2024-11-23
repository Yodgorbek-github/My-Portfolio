import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";

const portfolioData = [
  {
    id: 1,
    name: "Actimed Site",
    role: "UX-UI design",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
  {
    id: 2,
    name: "E-commerce App",
    role: "Frontend Development",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
  {
    id: 3,
    name: "Portfolio Website",
    role: "Fullstack Development",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
  {
    id: 1,
    name: "Actimed Site",
    role: "UX-UI design",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
  {
    id: 1,
    name: "Solimi",
    role: "Fullstack Development",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
  {
    id: 1,
    name: "CWK edu",
    role: "UX-UI design",
    image: "https://via.placeholder.com/200", // Muvaqqat tasvir
  },
];

function Portfolio() {
  return (
    <Box
      sx={{
        width: "100vw",
        marginTop: "90px",
        bgcolor: "transparent",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "700",
          color: "white",
          marginBottom: "50px",
        }}
      >
        Port<span style={{ color: "#01EEFF" }}>folio</span>
      </Typography>
      <Box
        sx={{
          bgcolor: "transparent",
          width: "85vw",
          maxWidth: "85vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid2
          container
          spacing={3}
          sx={{
            justifyContent: "center",
          }}
        >
          {portfolioData.map((item) => (
            <Grid2
              xs="auto"
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  width: "400px",
                  height: "574px",
                  bgcolor: "#323846",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                    padding: "20px 0",
                    position: "absolute",
                    top: 0,
                    left: "5%",
                    gap: '60px'
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "550",
                      fontSize: "22px",
                      color: "#FFFFFF",
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "550",
                      fontSize: "18px",
                      color: "#01EEFF",
                    }}
                  >
                    {item.role}
                  </Typography>
                </Box>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    marginTop: "90px",
                    width: "354px",
                    height: "365px",
                    objectFit: "cover",
                    borderRadius: '50px'
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "auto",
                    paddingBottom: "20px",
                  }}
                >
                  <button
                    style={{
                      width: "354px",
                      height: "80px",
                      background: "#01EEFF",
                      color: "#ffffff",
                      borderRadius: "25px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: '24px'
                    }}
                  >
                    See More
                  </button>
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Portfolio;

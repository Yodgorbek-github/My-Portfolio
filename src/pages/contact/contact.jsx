import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <>
      <Box
        sx={{
          marginTop: "90px",
          marginBottom: "55px",
          width: "100%",
          bgcolor: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1554px", // Asosiy kenglikni cheklash
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            Contact <span style={{ color: "#01EEFF" }}>Me</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <TextField
              label="First Name"
              variant="standard"
              InputLabelProps={{
                sx: {
                  color: "#FFFFFFBF",
                  ml: "10px",
                  fontSize: "26px",
                  fontWeight: "400",
                  textAlign: "left",
                  transition: "all 0.2s ease-out",
                  transform: "translate(11px, 19.5px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    pt: "5px",
                    pl: "10px",
                    fontSize: "23px",
                    transform: "translate(0, 0) scale(0.85)",
                  },
                },
              }}
              sx={{
                backgroundColor: "#323846",
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  color: "#FFFFFFBF",
                  fontSize: "22px",
                  pl: "21px",
                  pr: "15px",
                  pt: "5px",
                  width: "490px",
                  height: "50px",
                },
              }}
            />
            <TextField
              label="Last Name"
              variant="standard"
              InputLabelProps={{
                sx: {
                  color: "#FFFFFFBF",
                  ml: "10px",
                  fontSize: "26px",
                  fontWeight: "400",
                  textAlign: "left",
                  transition: "all 0.2s ease-out",
                  transform: "translate(11px, 19.5px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    pt: "5px",
                    pl: "10px",
                    fontSize: "23px",
                    transform: "translate(0, 0) scale(0.85)",
                  },
                },
              }}
              sx={{
                backgroundColor: "#323846",
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  color: "#FFFFFFBF",
                  fontSize: "22px",
                  pl: "21px",
                  pr: "15px",
                  pt: "5px",
                  width: "490px",
                  height: "50px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <TextField
              label="Phone Number"
              variant="standard"
              InputLabelProps={{
                sx: {
                  color: "#FFFFFFBF",
                  ml: "10px",
                  fontSize: "26px",
                  fontWeight: "400",
                  textAlign: "left",
                  transition: "all 0.2s ease-out",
                  transform: "translate(11px, 19.5px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    pt: "5px",
                    pl: "10px",
                    fontSize: "23px",
                    transform: "translate(0, 0) scale(0.85)",
                  },
                },
              }}
              sx={{
                backgroundColor: "#323846",
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  color: "#FFFFFFBF",
                  fontSize: "22px",
                  pl: "21px",
                  pr: "15px",
                  pt: "5px",
                  width: "490px",
                  height: "50px",
                },
              }}
            />
            <TextField
              label="Email Address"
              variant="standard"
              InputLabelProps={{
                sx: {
                  color: "#FFFFFFBF",
                  ml: "10px",
                  fontSize: "26px",
                  fontWeight: "400",
                  textAlign: "left",
                  transition: "all 0.2s ease-out",
                  transform: "translate(11px, 19.5px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    pt: "5px",
                    pl: "10px",
                    fontSize: "23px",
                    transform: "translate(0, 0) scale(0.85)",
                  },
                },
              }}
              sx={{
                backgroundColor: "#323846",
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  color: "#FFFFFFBF",
                  fontSize: "22px",
                  pl: "21px",
                  pr: "15px",
                  pt: "5px",
                  width: "490px",
                  height: "50px",
                },
              }}
            />
          </Box>
          <TextField
            label="Your Message"
            variant="standard"
            multiline
            InputLabelProps={{
              sx: {
                color: "#FFFFFFBF",
                ml: "10px",
                fontSize: "26px",
                fontWeight: "400",
                textAlign: "left",
                transition: "all 0.2s ease-out",
                transform: "translate(11px, 19.5px) scale(1)",
                "&.MuiInputLabel-shrink": {
                  pt: "5px",
                  pl: "10px",
                  fontSize: "23px",
                  transform: "translate(0, 0) scale(0.85)",
                },
              },
            }}
            sx={{
              mt: "20px",
              backgroundColor: "#323846",
              borderRadius: "10px",
              "& .MuiInputBase-input": {
                pt: "10px",
                textAlign: "left",
                color: "#FFFFFFBF",
                fontSize: "22px",
                pl: "21px",
                pr: "15px",
                width: "100%",
                minHeight: "290px",
                overflow: "auto",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              mt: "50px",
              color: "white",
              bgcolor: "#01EEFF",
              borderRadius: "10px",
              width: "420px",
              height: "70px",
              fontSize: "27px",
              fontWeight: "550",
              textTransform: "capitalize",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Contact;

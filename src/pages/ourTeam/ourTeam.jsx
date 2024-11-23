import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";

const teamData = [
    {
        id: 1,
        general: true,
        role: "Front-End Developer",
        name: "Yodgorbek",
        image: "/src/assets/imgs/front_end_developers_logo1.png",
    },
    {
        id: 2,
        general: false,
        role: "UX-UI Designer",
        name: "Mukhammad Sodiq",
        image: "/src/assets/imgs/ux_ui_designers_logo1.png",
    },
    {
        id: 3,
        general: false,
        role: "Back-End Developer",
        name: "Mukhriddin",
        image: "/src/assets/imgs/back_end_developers_logo.png",
    },
    {
        id: 4,
        general: false,
        role: "Full-Stack Developer",
        name: "Ibrohimjon",
        image: "/src/assets/imgs/back_end_developers_logo.png",
    },
];

function OurTeam() {
    return (
        <>
            <Box
            sx={{
                marginTop: "90px",
                maxWidth: "100vw",
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
                    Our <span style={{ color: "#01EEFF" }}>Team</span>
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
                display: "flex",
                justifyContent: "center",
            }}
            >
            {teamData.map((member) => (
                <Grid2
                xs="auto" 
                key={member.id}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
                >
                <Box
                    sx={{
                        flexDirection: "column",
                        width: "400px",
                        height: "445px",
                        bgcolor: "#323846",
                        borderRadius: "25px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                    src={member.image}
                    alt={member.role}
                    style={{
                        margin: "25px",
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                    }}
                    />
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: "50px",
                    }}
                    >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "24px",
                            marginTop: "30px",
                        }}
                    >
                        {member.role}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "20px",
                            color: member.general ? "#01EEFF" : "#FFFFFFBF",
                            marginTop: "10px",
                        }}
                    >
                        {member.name}
                    </Typography>
                </Box>
            </Box>
        </Grid2>
        ))}
    </Grid2>
    </Box>
    </Box>
    </>
);
}

export default OurTeam;

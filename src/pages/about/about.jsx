import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function About() {
    return (
        <>
        <Box
        sx={{
            width: "1554px", // Maksimal kenglikni cheklash
            marginY: {xs: '93px', sm: '110px', md: '150px', lg: '310px', xl: "170px"},
            marginLeft: {xs: '12%', sm: '12%', md: '11%', lg: '12%', xl: "120px"},
            bgcolor: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
            <Grid container spacing={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 10}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* Chap tomondagi surat */}
                <Grid item size={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box
                        sx={{
                            bgcolor: "#01EEFF",
                            width: {xs:'125px', sm:'250px', md:'350px', lg: '475px', xl: "575px"},
                            height: {xs:'125px', sm:'250px', md:'350px', lg: '475px', xl: "575px"},
                            borderRadius: "342px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            overflow: "hidden",
                            position: "relative",
                            margin: "0 auto", // Mobil ko'rinishda markazlashtirish
                        }}
                    >
                        <img
                            src="/src/assets/imgs/human.png"
                            alt="me"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                marginBottom: "-20px",
                            }}
                        />
                    </Box>
                </Grid>
                {/* O'ng tomondagi matn */}
                <Grid item size={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            maxWidth: "800px",
                            margin: "0 auto", // Mobil markazlash
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '13.4px', sm: '25px', md: '25px', lg: '30px', xl: "55px"},
                                fontWeight: {xs: '600', sm: '600', md: '500', lg: '500', xl: "600"},
                                color: "white",
                                textAlign: "left",
                            }}
                        >
                            About <span style={{ color: "#01EEFF" }}>Me</span>
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '13.4px', sm: '25px', md: '25px', lg: '30px', xl: "35px"},
                                fontWeight: {xs: '600', sm: '600', md: '500', lg: '500', xl: "600"},
                                color: "#FFFFFFBF",
                                marginTop: "1%",
                                textAlign: "left",
                            }}
                        >
                            Front End Developer
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "550",
                                fontSize: "22px",
                                color: "#FFFFFF99",
                                lineHeight: "1.6",
                                marginTop: "4%",
                                textAlign: "left",
                            }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default About;

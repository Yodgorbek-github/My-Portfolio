import React from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: 1000000000 }}
            />
            <Box
                sx={{
                    width: "100vw",
                    paddingTop: { xs: '16%', sm: '11.5%', md: '11%', lg: '90px', xl: "100px"},
                    paddingBottom: "135px",
                    display: "flex",
                    marginLeft: {xs: '12%', sm: '12%', md: '11%', lg: '12%', xl: "51px"},
                    justifyContent: "center",
                    bgcolor: "#151925",
                }}
            >
                <Box
                    sx={{
                        width: "1554px",
                        maxWidth: "100%", 
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Grid2 container spacing={{ xs: -1, sm: 1, md: -14, lg: 1, xl: 12}} sx={{ mt: { lg: '40px', xl: "100px"}, display: "flex" }}>
                        <Grid2 item size={6}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "left",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '13.4px', sm: '25px', md: '25px', lg: '30px', xl: "35px"},
                                        fontWeight: {xs: '600', sm: '600', md: '500', lg: '500', xl: "600"},
                                    }}
                                >
                                    Hello It’s Me!
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: { sm: '-5px', xl: "5px"},
                                        fontSize: { xs: '15px', sm: '30px', md: '31px', lg:'41px', xl:"51px"},
                                        fontWeight: { xs: '600', sm: '700', md: '600', lg: '600', xl: "700"},
                                        zIndex: '100'
                                    }}
                                >
                                    Yodgorbek Ziyoitdinov
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: { sm: '-2px', lg: '2px', xl: "5px"},
                                        fontSize: { xs: '10px', sm: '20px', md: '15px', lg:'25px', xl:"35px"},
                                        fontWeight: { xs: '600', sm: '600', md: '600', lg: '600', xl: "700"},
                                    }}
                                >
                                    And I am <span style={{ color: "#01EEFF" }}>Front End Developer</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#FFFFFFBF",
                                        mt: { sm: '1px', lg: '1px', xl: "8px"},
                                        fontSize: {xs: '5.5px', sm: '8px', md:'13px', lg: "20px"},
                                        fontWeight: {sm: '300', lg: '400', xl: "500"},
                                        maxWidth: {xs: '140px', sm: '300px', md: '420px', lg: '500px', xl: "700px"},
                                    }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s
                                </Typography>
                                <Box
                                    sx={{
                                        flexDirection: "row",
                                        marginTop: { xs: '5px', sm: '10px', md: '13px', lg: '30px', xl: "40px"},
                                    }}
                                >
                                    <img
                                        onClick={() => {
                                            window.open("https://t.me/the_frontend_developer_01");
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            width: "8%",
                                            height: "84%",
                                        }}
                                        src="/src/assets/imgs/tg_logo.png"
                                        alt="tg_logo"
                                    />
                                    <img
                                        onClick={() => {
                                            window.open("https://www.instagram.com/yodgorbek.offical/");
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "2%",
                                            width: "8%",
                                            height: "84%",
                                        }}
                                        src="/src/assets/imgs/instagram_logo.png"
                                        alt="instagram_logo"
                                    />
                                    <img
                                        onClick={() => {
                                            window.open("https://www.facebook.com/profile.php?id=61560008771642");
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "2%",
                                            width: "8%",
                                            height: "84%",
                                        }}
                                        src="/src/assets/imgs/facebook_logo.png"
                                        alt="facebook_logo"
                                    />
                                    <img
                                        onClick={() => {
                                            toast.error("Kechirasiz, lekin WhatsApp ulanishi mavjud emas!");
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "2%",
                                            width: "8%",
                                            height: "84%",
                                        }}
                                        src="/src/assets/imgs/whatsapp_logo.png"
                                        alt="whatsapp_logo"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: { xs: '5px', sm: '10px', md: '20px', lg: '30px', xl: "70px"},
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#01EEFF",
                                            color: "white",
                                            borderRadius: {xs: "5px", sm: "11px", md: "15px", lg: "12px", xl: "20px"},
                                            width: {xs: '90px', sm: '145px', md: '200px', lg: '220px', xl: "330px"},
                                            height: {xs: '20px', sm: '40px', md: '55px', lg: '60px', xl: "75px"},
                                            fontSize: {xs: '7px', sm: '10px', md: '15px', lg: '20px', xl: "24px"},
                                            fontWeight: "500",
                                        }}
                                        onClick={() => {
                                            toast.error("Kechirasiz, lekin CV mavjud emas!");
                                        }}
                                    >
                                        Download CV
                                    </Button>
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2 item xl={6}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: "#01EEFF",
                                        width: {xs:'125px', sm:'250px', md:'350px', lg: '475px', xl: "575px"},
                                        height: {xs:'125px', sm:'250px', md:'350px', lg: '475px', xl: "575px"},
                                        borderRadius: "342px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "flex-end",
                                        marginLeft: { xs: '-20px', sm: '-30px', md: '-80px', lg: '-80px',xl: "80px"},
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src="/src/assets/imgs/human.png"
                                        alt="me"
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            marginBottom: "-20px",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </>
    );
}

export default Home;

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ThankYouImage from "../../../images/thanks.png";
const Thanks = () => {
  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <Typography component="h2" variant="h3" gutterBottom>
            Thank you for Contacting us!
          </Typography>
          <Typography variant="body1">
            We've receieved your query, We'll schedule a call as soon as
            possible.
          </Typography>
        </Box>
        <Box
          id="image"
          sx={{
            alignSelf: 'center',
            height: { xs: 350, sm: 400 },
            width: '100%',
            backgroundImage:`url(${ThankYouImage})`,
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat',
            borderRadius: '10px',
            backgroundPosition:'center'
          }}
        />
      </Container>
    </Box>
  );
};

export default Thanks;

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
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
            Get In Touch
          </Typography>
          <Typography variant="body1">
            Complete the form and we'll promptly respond to begin your search
            for a hostel.
          </Typography>
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="collegeName"
                label="College Name"
                name="collegeName"
                autoComplete="college"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="contact"
                label="Contact Number"
                name="contact"
                autoComplete="contact"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="location"
                label="City Name"
                type="city"
                id="city"
                autoComplete="city"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="warning"
            variant="contained"
            sx={{ mt: 2, p: 1.5, fontSize: "0.8rem", fontWeight: "bold" }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Form;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Form = () => {
  const [buttonActive, setButtonActive] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonActive(false);
    if (!event.currentTarget.checkValidity()) {
      alert("Please fill in all required fields in form.");
      setButtonActive(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    try {
      const url =
        "https://script.google.com/macros/s/AKfycbyZSRmr-rPOB5xtZDDaIxqQiM9TrJq1OKtoCsNzggAHZmEq5UxG0ZW2Mlee1z7qZ4qOmQ/exec";
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Query Submitted will contact you back!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
    setButtonActive(true);
  };
  return (
    <Box
      id="contact"
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
                name="Full Name"
                required
                fullWidth
                id="fullName"
                label="Full Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="Gender-Label">Gender</InputLabel>
                <Select
                  labelId="Gender-Label"
                  id="gender"
                  label="Gender"
                  name="Gender"
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Others"}>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Course"
                required
                fullWidth
                id="course"
                label="Course Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="collegeName"
                label="College Name"
                name="College Name"
                autoComplete="college"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="contact"
                label="Contact Number"
                name="Contact"
                autoComplete="contact"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="City / State"
                label="City / State"
                type="city"
                id="city"
              />
            </Grid>
          </Grid>
          <Button
            disabled={!buttonActive}
            type="submit"
            fullWidth
            color="warning"
            variant="contained"
            sx={{ mt: 2, p: 1.5, fontSize: "0.8rem", fontWeight: "bold" }}
          >
            Request Callback
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Form;

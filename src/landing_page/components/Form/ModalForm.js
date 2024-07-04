import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
const ModalForm = ({ handleClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      alert("Please fill in all required fields in form.");
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
        alert("Query Submitted! We will contact you back.");
        handleClose();
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Box>
      <DialogTitle>
        <Typography
          variant="h4"
        >
          Hostel Bookings are Live!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography
            variant="h5"
            gutterBottom
          >
            Book your Dream Hostel Now.
          </Typography>
        </DialogContentText>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="primary" variant="contained">
              Contact Now
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Box>
  );
};
export default ModalForm;

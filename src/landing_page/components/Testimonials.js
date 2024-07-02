import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import User1 from "../../images/testimonial/user1.jpeg"
import User2 from "../../images/testimonial/user2.jpeg"
import User3 from "../../images/testimonial/user3.jpeg"
const userTestimonials = [
  {
    avatar: <Avatar alt="Aryan Gupta" src={User1} />,
    name: "Aarav Gupta",
    occupation: "Student @NIU",
    testimonial:
      "Using this website was a game-changer for me. It saved me time and effort by offering diverse options that matched my budget and preferences perfectly. Absolutely fantastic service!",
  },
  {
    avatar: (
      <Avatar alt="Bhoomi Dagore" src={User2} />
    ),
    name: "Bhoomi Dagore",
    occupation: "Student @NIU",
    testimonial:
      "I highly recommend this hostel search platform! It provided comprehensive information and genuine reviews, ensuring I found a safe and comfortable place to stay during my college days.",
  },
  {
    avatar: <Avatar alt="Anjali Singh" src={User3} />,
    name: "Anjali Singh",
    occupation: "Student @NIU",
    testimonial:
      "Thanks to this website, finding the perfect hostel was a breeze! The user-friendly interface and detailed listings made my search efficient and stress-free.",
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          gutterBottom
        >
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex" }}
            data-aos="zoom-in-up"
            data-aos-delay={300 + index * 150}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

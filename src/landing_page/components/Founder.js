import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../images/1.jpeg";
import Image2 from "../../images/2.jpeg";
import Image3 from "../../images/3.jpeg";
import Image4 from "../../images/4.jpeg";
import Profile from "../../images/profile.jpeg";

const founder = {
  title: "Professional",
  name: "Aman Jha",
  subheader: "CEO",
  description:
    "Aman Jha is a dynamic entrepreneur currently pursuing a BBA at Noida International University. Demonstrating a keen business acumen early on, Aman founded Youthpreneur.in, a platform dedicated to offering comprehensive digital marketing courses to students. Recognizing the challenges students face in finding quality accommodations, Aman also established Kaunsahostel, a service aimed at helping students secure the best hostel and PG accommodations.",
  images: [Image3,Image2,Image1,Image4],
  imageSrc: Profile,
};

export default function Founder() {
  return (
    <Container
      id="founders"
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
        data-aos-delay="300"
      >
        <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          gutterBottom
        >
          About Founder
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Meet Aman who founded Kaunsa Hostel to help students find their ideal
          living space without any worries.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        <Grid item xs={12} md={4} data-aos="zoom-out-left" data-aos-delay="600">
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              border: "1px solid",
              borderColor: "primary.main",
              background: "linear-gradient(#033363, #021F3B)",
              width: "100%",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "grey.100",
                }}
              >
                <Typography component="h3" variant="h5" gutterBottom>
                  {founder.name}
                </Typography>

                <Chip
                  icon={<AutoAwesomeIcon />}
                  label={founder.subheader}
                  size="small"
                  sx={{
                    alignSelf: "baseline",
                    background: (theme) =>
                      theme.palette.mode === "light" ? "" : "none",
                    backgroundColor: "primary.contrastText",
                    "& .MuiChip-label": {
                      color: "primary.dark",
                    },
                    "& .MuiChip-icon": {
                      color: "primary.dark",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  mb: 2,
                  color: "grey.50",
                }}
              >
                <Avatar
                  alt="founder image"
                  src={founder.imageSrc}
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Divider
                sx={{
                  my: 2,
                  opacity: 0.2,
                  borderColor: "grey.500",
                }}
              />
              <Box
                key={founder.name}
                sx={{
                  py: 1,
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <Typography
                  component="text"
                  variant="subtitle1"
                  sx={{
                    color: "grey.200",
                  }}
                >
                  {founder.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          data-aos="zoom-out-right"
          data-aos-delay="900"
        >
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
            }}
          >
            <CardContent>
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
              >
                {founder.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{objectFit:'contain', maxHeight:'500px'}}/>
                  </div>
                ))}
              </Carousel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

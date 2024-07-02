import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../images/Gallery/1.jpeg";
import Image2 from "../../images/Gallery/2.jpeg";
import Image3 from "../../images/Gallery/3.jpeg";
import Image4 from "../../images/Gallery/4.jpeg";
import Image5 from "../../images/Gallery/5.jpeg";
import Image6 from "../../images/Gallery/6.jpeg";
import Image7 from "../../images/Gallery/7.jpeg";
import Image8 from "../../images/Gallery/8.jpeg";
import Image9 from "../../images/Gallery/9.jpeg";
import Image10 from "../../images/Gallery/10.jpeg";
import Image11 from "../../images/Gallery/11.jpeg";
import Image12 from "../../images/Gallery/12.jpeg";

const ImageGallery = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];

  return (
    <Box
      id="gallery"
      sx={{
        pt: { xs: 2, sm: 6 },
        pb: { xs: 4, sm: 8 },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "70%" },
            textAlign: { sm: "left", md: "center" },
          }}
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <Typography component="h2" variant="h3" gutterBottom>
            Gallery
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            Glimpse of services offered by our partner hostels.
          </Typography>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageGallery;

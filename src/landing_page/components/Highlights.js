import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Easy Booking",
    description:
      "Navigate our user-friendly website for hassle-free accommodation booking.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that will help throughout the process.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Transparent Pricing",
    description: "Clear breakdown of costs ensures no hidden surprises.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Adaptable performance",
    description:
      "Our service effortlessly adjusts to your needs, boosting efficiency and simplifying your search.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Personalized Guidance",
    description:
      "Our experienced counselors assist with budget, preferences, and local insights.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Diverse Options",
    description:
      "Partnered with various hostels, we offer budget-friendly dorms to luxury studios. There's something for everyone.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
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
            We Offer You
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Discover a range of student accommodation options tailored to your
            needs. Benefit from personalized counseling, easy booking, and
            transparent pricing.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={300 + index * 150}
            >
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

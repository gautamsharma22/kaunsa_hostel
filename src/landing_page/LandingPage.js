import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ImageGallery from "./components/ImageGallery";
import Founder from "./components/Founder";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Form from "./components/Form";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [mode, setMode] = React.useState("dark");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
      <Divider />
        <Features />
        <Divider />
        <Services />
        <Divider />
        <Testimonials />
        <Divider />
        <Founder />
        <Divider />
        <Form />
        <Divider />
        <FAQ />
        <Divider />
        <ImageGallery />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

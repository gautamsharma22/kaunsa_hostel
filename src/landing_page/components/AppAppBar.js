import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
// import ToggleColorMode from "./ToggleColorMode";
import LogoIMG from "../../images/logo-only-text.png";
const logoStyle = {
  height: "2rem",
  cursor: "pointer",
  p:2
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
                p:2
              }}
            >
              <img
                src={LogoIMG}
                style={logoStyle}
                alt="logo of kaunsa hostel"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <MenuItem
                onClick={() => scrollToSection("features")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                Features
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("services")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                Services
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("testimonials")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  Testimonials
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("founders")}
                sx={{ py: "6px", px: "12px"}}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("contact")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  Contact
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  FAQ
                </Typography>
              </MenuItem>
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              <Button
                color="warning"
                variant="outlined"
                size="medium"
                component="a"
                sx={{ p: 1, fontWeight: "bold" }}
                href="https://wa.me/+918595948615"
                target="_blank"
              >
                Contact Us
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  {/* <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box> */}
                  <MenuItem
                onClick={() => scrollToSection("features")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                Features
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("services")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                Services
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("testimonials")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  Testimonials
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("founders")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("contact")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  Contact
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("faq")}
              >
                <Typography variant="body1" color="text.primary" sx={{fontWeight:"bold"}}>
                  FAQ
                </Typography>
              </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="warning"
                      variant="contained"
                      component="a"
                      href="https://wa.me/+918595948615"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Contact Us
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default AppAppBar;

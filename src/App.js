import React, { useEffect } from "react";
import LandingPage from "./landing_page/LandingPage";
import "aos/dist/aos.css";

import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return <LandingPage />;
}

export default App;

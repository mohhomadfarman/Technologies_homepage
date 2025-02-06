import React from "react";
import { createRoot } from "react-dom/client";  // Only import createRoot
import App from "./App";

// Libraries
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domMax } from "framer-motion";

// css
import "./Assets/css/icons.css"
import "./Assets/css/global.css"
import "./Assets/css/pages.css"
import "./index.scss"

const root = createRoot(document.getElementById("root"));  // Use createRoot directly
root.render(
  <LazyMotion features={domMax}>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </LazyMotion>
);

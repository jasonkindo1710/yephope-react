import React from "react";
import "./assets/css/index.scss";
import {
  Contact,
  Footer,
  Gallery,
  LandingPage,
  Navbar,
  Sponsor,
  Team,
} from "./sections";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Sponsor />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

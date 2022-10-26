import React from "react";
import "./assets/css/index.scss";
import {
  Contact,
  Footer,
  Gallery,
  LandingPage,
  Nav,
  Sponsor,
  Team,
} from "./sections";

function App() {
  return (
    <div>
      <Nav />
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

import { useState } from "react";
import Navheader from "./Components/NavHeader/Navheader";
import HeroMainHomePage from "./Components/HeroMainpage/Herosection";
import HouseIntroSection from "./Components/HouseIntro/HouseIntro";
import Footer from "./Components/Footer/Footer";
import EventsCarousel from "./Components/EventsCarousel/EventsCarousel";

function App() {

  return (
    <div>
      <Navheader />
      <HeroMainHomePage />
      <HouseIntroSection />
      <EventsCarousel />
      <Footer />
    </div>
  );
}

export default App;

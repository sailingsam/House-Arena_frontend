import { useState } from "react";
import Navheader from "./Components/NavHeader/Navheader";
import HeroMainHomePage from "./Components/HeroMainpage/Herosection";
import HouseIntroSection from "./Components/HouseIntro/HouseIntro";

function App() {

  return (
    <div>
      <Navheader />
      <HeroMainHomePage />
      <HouseIntroSection />
    </div>
  );
}

export default App;

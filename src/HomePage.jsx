import Navheader from "./Components/NavHeader/Navheader";
import HeroMainHomePage from "./Components/HomePage/HeroMainpage/Herosection";
import HouseIntroSection from "./Components/HomePage/HouseIntro/HouseIntro";
import Footer from "./Components/Footer/Footer";
import EventsCarousel from "./Components/HomePage/EventsCarousel/EventsCarousel";

function App() {

  return (
    <div>
      <HeroMainHomePage />
      <HouseIntroSection />
      <EventsCarousel />
    </div>
  );
}

export default App;

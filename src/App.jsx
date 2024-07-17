import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/HeroSection/Hero";
import WelcomeComponent from "./components/WelcomeSection/WelcomeComponent";
import Community from "./components/CommunitySection/Community";
import { BookingCard } from "./components/BookingCards/BookingCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <WelcomeComponent />
      <Community />
      <BookingCard />
    </>
  );
}

export default App;

import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/HeroSection/Hero";
import WelcomeComponent from "./components/WelcomeSection/WelcomeComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <WelcomeComponent />
    </>
  );
}

export default App;

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import ThreeBackground from "./components/ThreeBackGround/ThreeBackGround.tsx";

function App() {
  return (
    <>
      <Header />
      <ThreeBackground />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import QueroAdotar from "./components/QueroAdotar";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <QueroAdotar />
    </>
  );
}


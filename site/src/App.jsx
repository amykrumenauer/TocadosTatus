import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import QueroAdotar from "./components/QueroAdotar";
import Loja from "./components/Loja"
import "./index.css";
import Voluntariado from "./components/Voluntariado";
import Contato from "./components/Contato";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <QueroAdotar />
      <Loja />
      <Voluntariado />
      <Contato />
    </>
  );
}


import gatinho from "../assets/gatohome.jpg";
import pata from "../assets/patas.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={pata} alt="Pata de fundo" className="hero-pata" />

      <div className="hero-text">
        <h1 className="hero-title">Um lar de amor e esperança para cada gatinho</h1>
        <p className="hero-subtitle">
          A Toca dos Tatus é um projeto independente de resgate, recuperação e adoção responsável.
        </p>

        <div className="hero-button-container">
          <a href="#adotar" className="botao-adotar">
            Quero Adotar
          </a>
        </div>
      </div>

      <img src={gatinho} alt="Gatinho" className="hero-img" />
    </section>
  );
}




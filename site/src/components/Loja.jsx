import lojinha from "../assets/lojinha.jpg";
import pata from "../assets/patas.png";

export default function Loja() {
  return (
    <section className="loja" id="loja">
      <img src={pata} alt="Pata" className="loja-pata" />

      <h2 className="loja-title">Lojinha da Toca</h2>

      <p className="loja-description">
        Cada compra na nossa lojinha ajuda a manter o projeto ativo —
        cobrindo castrações, alimentação e cuidados veterinários dos
        gatinhos resgatados. É um jeito simples e carinhoso de apoiar a causa :)
      </p>

      <img src={lojinha} alt="Lojinha" className="loja-img" />

      <a
        href="https://lojinhadatocadostatus.appsimpliza.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="loja-btn"
      >
        Ir para a Lojinha
      </a>
    </section>
  );
}




import "../index.css";
import pata from "../assets/patas.png";

export default function Voluntariado() {
  return (
    <section
      id="voluntario"
      className="voluntario-section"
    >
      {/* Pata de fundo */}
      <img
        src={pata}
        alt="Pata de fundo"
        className="voluntario-pata"
      />

      <h2 className="voluntario-titulo">Seja Voluntário</h2>

      <div className="voluntario-cards">

        {/* CARD 1 */}
        <div className="vol-card">
          <h3>Transforme o amor em ação</h3>
          <p>
            Na Toca dos Tatus, cada voluntário faz parte de uma corrente do bem
            que salva, acolhe e enche de amor os gatinhos resgatados.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="vol-card">
          <h3>Como você pode ajudar:</h3>
          <p>
            Dar amor e cuidados nos abrigos, ajudar nas feirinhas de adoção,
            divulgar nossos peludos nas redes e recolher doações e ração.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="vol-card">
          <h3>Quer fazer parte?</h3>
          <p>
            Clique abaixo e conte pra gente como você gostaria de ajudar.
            Juntos, espalhamos muito ronron e esperança.
          </p>
        </div>

      </div>

      <a
        href="https://forms.gle/XXXX" 
        target="_blank"
        rel="noopener noreferrer"
        className="botao-voluntario"
      >
        Quero Ser Voluntário
      </a>
    </section>
  );
}

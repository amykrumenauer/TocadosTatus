import pata from "../assets/patas.png";
import gato from "../assets/gatosobre.png"; 

export default function Sobre() {
  return (
    <section className="sobre-section" id="sobre">
      <img src={pata} alt="Pata de fundo" className="pata-bg" />

      <div className="sobre-content">
        <div className="sobre-texto">
          <h2>Quem somos nós</h2>
          <p>
            A Toca dos Tatus não é uma ONG, clínica veterinária ou instituição
            formal — é o nome da nossa casa e do nosso projeto de amor. Tudo começou
            com o resgate da gatinha Luiza, que inspirou nossa missão de resgatar,
            recuperar e encontrar lares responsáveis para gatos. Um trabalho feito
            com coração.
          </p>
          <h2>Nossa missão</h2>
          <p>
            Hoje, a humana responsável é uma protetora independente, e juntos —
            humanos e gatinhos — formamos uma família dedicada ao cuidado, respeito
            e amor pelos felinos. Cada adoção é feita com transparência,
            responsabilidade e carinho, porque acreditamos que cada gato merece um
            lar especial.
          </p>
        </div>

        <div className="sobre-imagem">
          <img src={gato} alt="Gatinho fofo" />
        </div>
      </div>

      <div className="sobre-footer">
        Acreditamos que cada resgate é uma chance de recomeço — para o gato e para quem o adota.
      </div>
    </section>
  );
}

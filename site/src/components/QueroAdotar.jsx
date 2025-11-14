import "../index.css";
import pata from "../assets/patas.png"; // imagem da pata grande

export default function QueroAdotar() {
  return (
    <section
      id="adotar"
      style={{
        position: "relative",
        backgroundColor: "#fff",
        padding: "100px 60px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔸 Pata grande atrás, igual Hero */}
      <img
        src={pata}
        alt="Pata de fundo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-40%, -50%)", // centraliza igual a Hero (pode ajustar)
          width: "700px",                     // tamanho da pata (ajustável)
          opacity: 0.07,
          zIndex: 0,
        }}
      />

      <h2 className="adotar-titulo" style={{ position: "relative", zIndex: 1 }}>
        Quero Adotar
      </h2>

      <p className="adotar-texto" style={{ position: "relative", zIndex: 1 }}>
        Na Toca dos Tatus, acreditamos que os gatinhos devem ser escolhidos por conexão.
        O que isso quer dizer? Que apesar dos gatinhos disponíveis estarem públicos no
        nosso feed do Instagram e no destaque “Me Adota”, você deve vir pessoalmente
        encontrar o seu gatinho na Sala de Gatoterapia. Afinal, é um relacionamento para
        a vida toda — não dá pra escolher seu amor só por foto, né? Precisa dar match pessoalmente!
      </p>

      <div className="adotar-cards" style={{ position: "relative", zIndex: 1 }}>
        <div className="card">
          <h3>Primeiro contato</h3>
          <p>
            Envie uma mensagem para a gente pelo direct do Instagram. Faremos uma entrevista
            rápida para conhecer melhor o ambiente. Ou adiante o processo pelo forms abaixo.
          </p>
        </div>

        <div className="card">
          <h3>Aprovação e Feirinha</h3>
          <p>
            Se for aprovado(a), você receberá instruções sobre o kit básico necessário
            para a chegada do novo amigo. Venha na nossa feirinha de adoção.
          </p>
        </div>

        <div className="card">
          <h3>Finalização</h3>
          <p>
            Tudo o que você precisa pode ser encontrado na nossa lojinha, e você ainda
            vai receber a carteirinha de adoção — o Manual Básico do Gato.
          </p>
        </div>
      </div>

      <a
        href="https://forms.gle/2Qo2NvGUcr8k3ED18"
        target="_blank"
        rel="noopener noreferrer"
        className="botao-adotar"
        style={{ position: "relative", zIndex: 1 }}
      >
        Formulário de Adoção
      </a>
    </section>
  );
}

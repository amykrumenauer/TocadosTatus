import "../index.css";

export default function QueroAdotar() {
  return (
    <section id="adotar" className="adotar-section">
      <h2 className="adotar-titulo">Quero Adotar</h2>
      <p className="adotar-texto">
        Na Toca dos Tatus, acreditamos que os gatinhos devem ser escolhidos por conexão.
        O que isso quer dizer? Que apesar dos gatinhos disponíveis estarem públicos no
        nosso feed do Instagram e no destaque “Me Adota”, você deve vir pessoalmente
        encontrar o seu gatinho na Sala de Gatoterapia. Afinal, é um relacionamento para
        a vida toda — não dá pra escolher seu amor só por foto, né? Precisa dar match pessoalmente!
      </p>

      <div className="adotar-cards">
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
      >
        Formulário de Adoção
      </a>
    </section>
  );
}

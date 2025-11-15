import lojinha from "../assets/lojinha.jpg";
import pata from "../assets/patas.png";

export default function Loja() {
  return (
    <section style={styles.section}>
      {/* Pata única de fundo */}
      <img src={pata} alt="Pata" style={styles.pata} />

      <h2 style={styles.title}>Lojinha da Toca</h2>

      <p style={styles.description}>
        Cada compra na nossa lojinha ajuda a manter o projeto ativo —
        cobrindo castrações, alimentação e cuidados veterinários dos
        gatinhos resgatados. É um jeito simples e carinhoso de apoiar a causa :)
      </p>

      <img src={lojinha} alt="Lojinha" style={styles.image} />

      <a
        href="https://lojinhadatocadostatus.appsimpliza.com.br"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        Ir para a Lojinha
      </a>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    backgroundColor: "#261B1B",
    textAlign: "center",
    padding: "100px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
    overflow: "hidden",
  },

  pata: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    opacity: 0.06,
    zIndex: 0,
    pointerEvents: "none",
  },

  title: {
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: "42px",
    color: "#FFFFFF",
    zIndex: 2,
  },

  description: {
    fontFamily: "'Flamenco', cursive",
    fontSize: "22px",
    color: "#E8D6C5",
    maxWidth: "700px",
    zIndex: 2,
    lineHeight: "1.4",
  },

  image: {
    width: "600px",
    borderRadius: "40px",
    objectFit: "cover",
    zIndex: 2,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },

  button: {
    backgroundColor: "#00C29F",
    padding: "14px 36px",
    borderRadius: "40px",
    color: "#261B1B",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
    zIndex: 2,
    transition: "all 0.3s ease",
  },
};



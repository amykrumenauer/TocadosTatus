import { useState } from "react";
import gatinho from "../assets/gatohome.jpg";
import pata from "../assets/patas.png"; // 🔸 imagem de uma pata grande, de preferência com fundo transparente

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={styles.hero}>
      {/* 🔸 Imagem da pata de fundo */}
      <img src={pata} alt="Pata de fundo" style={styles.pata} />

      <div style={styles.text}>
        <h1 style={styles.title}>Um lar de amor e esperança para cada gatinho</h1>
        <p style={styles.subtitle}>
          A Toca dos Tatus é um projeto independente de resgate, recuperação e adoção responsável.
        </p>

        <div style={styles.buttonContainer}>
          <a
            href="#adotar"
            rel="noopener noreferrer"
            style={{
              ...styles.button,
              backgroundColor: isHovered ? "#e0a800" : "#FFBB00",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered
                ? "0 4px 12px rgba(0,0,0,0.2)"
                : "0 2px 6px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Quero Adotar
          </a>
        </div>
      </div>

      <img src={gatinho} alt="Gatinho" style={styles.image} />
    </section>
  );
}

const styles = {
  hero: {
    position: "relative", // 🔸 necessário pra posicionar a pata atrás
    backgroundColor: "#FFF9F3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    padding: "100px 80px",
    overflow: "hidden", // evita que a pata “vaze” pra fora
  },

  pata: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-10%, -50%)", // centraliza no meio da seção
    width: "700px", // 🔸 tamanho da pata (pode ajustar)
    opacity: 0.07, // 🔸 deixa ela bem suave
    zIndex: 0, // 🔸 garante que fique atrás de tudo
  },

  text: {
    maxWidth: "500px",
    textAlign: "left",
    zIndex: 1, // 🔸 conteúdo fica na frente da pata
  },

  title: {
    fontFamily: "'Flamenco', cursive",
    fontSize: "42px",
    color: "#261B1B",
    marginBottom: "10px",
  },

  subtitle: {
    fontFamily: "'Flamenco', cursive",
    fontSize: "22px",
    color: "#6B4F3A",
    marginBottom: "25px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#FFBB00",
    padding: "12px 28px",
    borderRadius: "40px",
    color: "#261B1B",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-block",
  },

  image: {
    width: "400px",
    borderRadius: "40px",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    zIndex: 1, // 🔸 também fica na frente da pata
  },
};



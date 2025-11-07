import gatinho from "../assets/gatohome.jpg"; // troque pela sua imagem
import patas from "../assets/patas.png";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.text}>
        <h1 style={styles.title}>Um lar de amor e esperança para cada gatinho</h1>
        <p style={styles.subtitle}>
          A Toca dos Tatus é um projeto independente de resgate, recuperação e adoção responsável.
        </p>
        <a href="#adotar" style={styles.button}>Quero Adotar</a>
      </div>

      <img src={gatinho} alt="Gatinho" style={styles.image} />
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: "#FFF9F3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    padding: "60px 80px",
  },

  text: {
    maxWidth: "450px",
    textAlign: "left",
  },

  title: {
    fontFamily: "'Flamenco', cursive",
    fontSize: "40px",
    color: "#261B1B",
    marginBottom: "10px",
  },

  subtitle: {
    fontFamily: "'Flamenco', cursive",
    fontSize: "20px",
    color: "#6B4F3A",
    marginBottom: "20px",
  },

  button: {
    backgroundColor: "#FFBB00",
    padding: "12px 26px",
    borderRadius: "6px",
    color: "#261B1B",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "18px",
    textDecoration: "none",
    transition: "0.3s",
  },

  image: {
    width: "340px",
    borderRadius: "16px",
    objectFit: "cover",
  },
};


import logo from "../assets/toca.jpeg";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <span style={styles.title}>Toca dos Tatus</span>
        <img src={logo} alt="Logo Toca dos Tatus" style={styles.logo} />
      </div>

      <nav style={styles.nav}>
        <a style={styles.link} href="#sobre">Sobre nós</a>
        <a style={styles.link} href="#adotar">Quero Adotar</a>
        <a style={styles.link} href="#loja">Loja</a>
        <a style={styles.link} href="#voluntario">Seja Voluntário</a>
        <a style={styles.link} href="#contato">Contato</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    height: "80px",
    backgroundColor: "#261B1B",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    margin: 0,
    padding: 0,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingLeft: "20px", 
  },

  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },

  title: {
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: "26px",
    color: "#FFFFFF",
    letterSpacing: "1px",
  },

  nav: {
    display: "flex",
    gap: "32px",
    paddingRight: "30px",
    fontFamily: "'Julius Sans One', sans-serif",
  },

  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  },
};




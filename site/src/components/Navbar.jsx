export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <span style={styles.title}>Toca dos Tatus</span>
      </div>

      <nav style={styles.nav}>
        <a className="nav-link" href="#sobre">Sobre nós</a>
        <a className="nav-link" href="#adotar">Quero Adotar</a>
        <a className="nav-link" href="#loja">Loja</a>
        <a className="nav-link" href="#voluntario">Seja Voluntário</a>
        <a className="nav-link" href="#contato">Contato</a>
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

  title: {
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: "30px",
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




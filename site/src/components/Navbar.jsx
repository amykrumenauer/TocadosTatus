import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="brand">
        <span className="title">Toca dos Tatus</span>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#sobre" className="nav-link" onClick={closeMenu}>Sobre</a>
        <a href="#adotar" className="nav-link" onClick={closeMenu}>Quero Adotar</a>
        <a href="#loja" className="nav-link" onClick={closeMenu}>Loja</a>
        <a href="#voluntario" className="nav-link" onClick={closeMenu}>Voluntariado</a>
        <a href="#contato" className="nav-link" onClick={closeMenu}>Contato</a>
      </nav>

      <div 
        className={`menu-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}










import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import pata from "../assets/patas.png";

export default function Contato() {
  return (
    <section id="contato">
      <img src={pata} alt="Pata de fundo" className="patinha-fundo" />

      <div className="contato-container">
        <h2 className="contato-titulo">Entre em Contato</h2>

        <p className="contato-texto">
          Tem alguma dúvida, quer ajudar ou apenas conhecer a Toca?
          Ficaremos felizes em conversar com você!
        </p>

        <div className="contato-conteudo">

          {/* MAPA */}
          <div className="contato-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.774563475271!2d-49.283280624610086!3d-25.445799377551722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce53428a8f78b%3A0x12fc73c4f6500a76!2sToca%20dos%20Tatus!5e0!3m2!1spt-BR!2sbr!4v1763395654356!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Toca dos Tatus"
            ></iframe>
          </div>

          {/* REDES */}
          <div className="contato-redes">
            <a
              href="https://www.instagram.com/toca.dos.tatus/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icone" />
            </a>

            <a
              href="https://www.facebook.com/Toca.dos.Tatus2/?locale=pt_BR"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="icone" />
            </a>

            <a
              href="https://www.tiktok.com/@toca.dos.tatus"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="icone" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



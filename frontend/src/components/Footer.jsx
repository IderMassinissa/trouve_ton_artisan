import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row py-5">
        {/* Logo + description */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h5 className="footer__title">Trouve ton artisan !</h5>
          <p className="footer__desc">
            Plateforme officielle de la région Auvergne-Rhône-Alpes pour la
            promotion de l'artisanat local.
          </p>
        </div>

        {/* Contact */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h6 className="footer__heading">Contact</h6>
          <address className="footer__address">
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
            <br />
            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
          </address>
        </div>

        {/* Liens légaux */}
        <div className="col-md-4">
          <h6 className="footer__heading">Informations légales</h6>
          <ul className="footer__links">
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link to="/donnees-personnelles">Données personnelles</Link>
            </li>
            <li>
              <Link to="/accessibilite">Accessibilité</Link>
            </li>
            <li>
              <Link to="/cookies">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>© 2024 Région Auvergne-Rhône-Alpes</p>
      </div>
    </div>
  </footer>
);

export default Footer;

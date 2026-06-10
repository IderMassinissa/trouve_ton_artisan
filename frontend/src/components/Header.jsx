import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Logo.png";
import "../styles/Header.scss";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Charge les catégories depuis l'API
  useEffect(() => {
    axios
      .get(`${API_URL}/api/categories`, {
        headers: { "x-api-key": API_KEY },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Erreur chargement catégories :", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/artisans?q=${search}`);
  };

  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid px-4">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Trouve ton artisan !" height="50" />
          </Link>

          {/* Hamburger mobile */}
          <button
            className="navbar-toggler"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            {/* Navigation catégories */}
            <ul className="navbar-nav me-auto">
              {categories.map((cat) => (
                <li className="nav-item" key={cat.id}>
                  <Link
                    className="nav-link"
                    to={`/artisans?categorie=${cat.id}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat.nom}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Barre de recherche */}
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                type="search"
                className="form-control me-2"
                placeholder="Rechercher un artisan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Recherche"
              />
              <button className="btn btn-primary" type="submit">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

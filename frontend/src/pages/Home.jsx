import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/artisans/top`, {
        headers: { "x-api-key": API_KEY },
      })
      .then((res) => setTopArtisans(res.data))
      .catch((err) =>
        console.error("Erreur chargement artisans du mois :", err),
      );
  }, []);

  // Affiche les étoiles selon la note
  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < Math.round(note) ? "star star--full" : "star star--empty"
        }
      >
        ★
      </span>
    ));
  };

  return (
    <main>
      {/* Hero */}
      <section className="hero bg-light py-5">
        <div className="container text-center">
          <h1 className="hero__title">
            Trouvez l'artisan idéal près de chez vous
          </h1>
          <p className="hero__subtitle">
            Découvrez des savoir-faire authentiques et locaux en
            Auvergne-Rhône-Alpes.
          </p>
        </div>
      </section>

      {/* Comment trouver mon artisan */}
      <section className="steps py-5">
        <div className="container">
          <h2 className="text-center mb-5">Comment trouver mon artisan ?</h2>
          <div className="row g-4">
            {[
              {
                num: 1,
                text: "Choisir la catégorie d'artisanat dans le menu.",
              },
              { num: 2, text: "Choisir un artisan." },
              { num: 3, text: "Le contacter via le formulaire de contact." },
              { num: 4, text: "Une réponse sera apportée sous 48h." },
            ].map((step) => (
              <div className="col-6 col-md-3" key={step.num}>
                <div className="step text-center">
                  <div className="step__number">{step.num}</div>
                  <p className="step__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans du mois */}
      <section className="top-artisans py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Artisans du mois</h2>
          <div className="row g-4 justify-content-center">
            {topArtisans.map((artisan) => (
              <div className="col-12 col-md-4" key={artisan.id}>
                <Link to={`/artisans/${artisan.id}`} className="card-link">
                  <div className="artisan-card">
                    <h3 className="artisan-card__name">{artisan.nom}</h3>
                    <div className="artisan-card__stars">
                      {renderStars(artisan.note)}
                    </div>
                    <p className="artisan-card__specialite">
                      {artisan.Specialite?.nom}
                    </p>
                    <p className="artisan-card__ville">📍 {artisan.ville}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

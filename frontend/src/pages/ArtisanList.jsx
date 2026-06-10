import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const ArtisanList = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const categorieId = searchParams.get("categorie");
  const query = searchParams.get("q");

  useEffect(() => {
    setLoading(true);

    let url = `${API_URL}/api/artisans`;
    if (categorieId) url = `${API_URL}/api/artisans/categorie/${categorieId}`;
    if (query) url = `${API_URL}/api/artisans/search?q=${query}`;

    axios
      .get(url, { headers: { "x-api-key": API_KEY } })
      .then((res) => setArtisans(res.data))
      .catch((err) => console.error("Erreur chargement artisans :", err))
      .finally(() => setLoading(false));
  }, [categorieId, query]);

  const renderStars = (note) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < Math.round(note) ? "star star--full" : "star star--empty"
        }
      >
        ★
      </span>
    ));

  return (
    <main className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="page-title">
          {query ? `Résultats pour "${query}"` : "Liste des artisans"}
        </h1>
        <span className="results-count">
          {artisans.length} artisan(s) trouvé(s)
        </span>
      </div>

      {loading && <p>Chargement...</p>}

      <div className="row g-4">
        {artisans.map((artisan) => (
          <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
            <Link to={`/artisans/${artisan.id}`} className="card-link">
              <div className="artisan-card">
                <h2 className="artisan-card__name">{artisan.nom}</h2>
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

      {!loading && artisans.length === 0 && (
        <p className="text-center mt-5">Aucun artisan trouvé.</p>
      )}
    </main>
  );
};

export default ArtisanList;

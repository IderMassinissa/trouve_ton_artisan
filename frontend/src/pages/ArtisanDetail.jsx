import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const ArtisanDetail = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/artisans/${id}`, {
        headers: { "x-api-key": API_KEY },
      })
      .then((res) => setArtisan(res.data))
      .catch((err) => console.error("Erreur chargement artisan :", err));
  }, [id]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi email à implémenter côté backend
    setSent(true);
  };

  if (!artisan) return <p className="container py-5">Chargement...</p>;

  return (
    <main className="container py-5">
      <div className="row g-5">
        {/* Colonne gauche */}
        <div className="col-12 col-lg-7">
          <img
            src={`https://picsum.photos/seed/${artisan.id}/800/400`}
            alt={artisan.nom}
            className="artisan-detail__image mb-4"
          />
          <h1 className="artisan-detail__name">{artisan.nom}</h1>
          <div className="artisan-detail__stars mb-2">
            {renderStars(artisan.note)}
          </div>
          <p className="artisan-detail__specialite">
            {artisan.Specialite?.nom}
          </p>
          <p className="artisan-detail__ville">📍 {artisan.ville}</p>
          {artisan.site_web && (
            <a
              href={artisan.site_web}
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 {artisan.site_web}
            </a>
          )}

          <section className="artisan-detail__about mt-4">
            <h2>À propos</h2>
            <p>{artisan.a_propos}</p>
          </section>
        </div>

        {/* Colonne droite — formulaire */}
        <div className="col-12 col-lg-5">
          <div className="contact-form">
            <h2 className="mb-4">Contacter cet artisan</h2>
            {sent ? (
              <div className="alert alert-success">
                Message envoyé ! Une réponse vous sera apportée sous 48h.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="objet" className="form-label">
                    Objet
                  </label>
                  <input
                    type="text"
                    id="objet"
                    className="form-control"
                    required
                    value={form.objet}
                    onChange={(e) =>
                      setForm({ ...form, objet: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtisanDetail;

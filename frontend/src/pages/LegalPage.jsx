import { useLocation } from "react-router-dom";

// Mapping des routes vers les titres
const titles = {
  "/mentions-legales": "Mentions légales",
  "/donnees-personnelles": "Données personnelles",
  "/accessibilite": "Accessibilité",
  "/cookies": "Cookies",
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const title = titles[pathname] || "Page légale";

  return (
    <main className="container py-5">
      <h1 className="mb-4">{title}</h1>
      <div className="legal-content p-5 bg-light rounded text-center">
        <p className="text-muted">Page en construction.</p>
        <p className="text-muted">Ce contenu sera bientôt disponible.</p>
      </div>
    </main>
  );
};

export default LegalPage;

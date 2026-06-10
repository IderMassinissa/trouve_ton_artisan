import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="container py-5 text-center">
    <h1 className="display-1 text-primary">404</h1>
    <h2 className="mb-4">Page non trouvée</h2>
    <p className="text-muted mb-5">
      La page que vous avez demandée n'existe pas ou a été déplacée.
    </p>
    <Link to="/" className="btn btn-primary btn-lg">
      Retour à l'accueil
    </Link>
  </main>
);

export default NotFound;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisanList";
import ArtisanDetail from "./pages/ArtisanDetail";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import "./styles/main.scss";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artisans" element={<ArtisanList />} />
      <Route path="/artisans/:id" element={<ArtisanDetail />} />
      <Route path="/mentions-legales" element={<LegalPage />} />
      <Route path="/donnees-personnelles" element={<LegalPage />} />
      <Route path="/accessibilite" element={<LegalPage />} />
      <Route path="/cookies" element={<LegalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

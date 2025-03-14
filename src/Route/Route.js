import { Route, Routes } from 'react-router-dom'; // Pas besoin de HashRouter ici
import Main from "../pages/Main";
import Formulaires from "../pages/Formulaires";
import PageContact from "../pages/Contact";
import Orthodontie from "../pages/Orthodontie";
import Stomatologie from "../pages/Stomatologie";
import Enquete from "../pages/Enquete"
import Recrutement from "../pages/recrutement"
import Dashboard from "../pages/Dashboard/index"
import PageAccueil from "../pages/Dashboard/PageAccueil"




function MyRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Prendre-RDV" element={<Formulaires />} />
      <Route path="/Contact" element={<PageContact />} />
      <Route path="/Orthodontie" element={<Orthodontie />} />
      <Route path="/Stomatologie" element={<Stomatologie />} />
      <Route path="/Enquete" element={<Enquete />} />
      <Route path="/Recrutement" element={<Recrutement />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Edit-Accueil" element={<PageAccueil />} />
    </Routes>
  );
}
export default MyRoute;
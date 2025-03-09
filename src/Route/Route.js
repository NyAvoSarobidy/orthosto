import { Route, Routes } from 'react-router-dom'; // Pas besoin de HashRouter ici
import Main from "../pages/Main";
import Formulaires from "../pages/Formulaires";
import PageContact from "../pages/Contact";
import Orthodontie from "../pages/Orthodontie";
import Stomatologie from "../pages/Stomatologie";


function MyRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Prendre-RDV" element={<Formulaires />} />
      <Route path="/Contact" element={<PageContact />} />
      <Route path="/Orthodontie" element={<Orthodontie />} />
      <Route path="/Stomatologie" element={<Stomatologie />} />
      
    </Routes>
  );
}
export default MyRoute;
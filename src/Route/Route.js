import { Route, Routes } from 'react-router-dom'; // Pas besoin de HashRouter ici
import Main from "../pages/Main";
import Formulaires from "../pages/Formulaires";

function MyRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Prendre-RDV" element={<Formulaires />} />
    </Routes>
  );
}

export default MyRoute;
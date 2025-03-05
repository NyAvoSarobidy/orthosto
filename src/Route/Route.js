 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Main  from "../pages/Main";
 import Formulaires  from "../pages/Formulaires";
 function MyRoute(){

 return(

     <Routes>
              <Route path="/Accueil" element={<Main />} />
              <Route path="/Prendre-RDV" element={<Formulaires />} />
     </Routes>
 );

 }

 export default MyRoute;
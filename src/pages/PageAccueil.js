import React from "react";

import Body from './Body'
import Carte from './Elements/Carte'
import Apropos from './Elements/Apropos'
 import RendezVous from './Elements/RendezVous'
 import Techno from './Elements/Cabinet'
 import Techonologie from './Elements/Techno'
 import Galerie from './Elements/Galerie'
 import Localisation from './Elements/Localisation'


function PageAccueil(){
    return(
    
        <>
             <Body />
            <Carte />
            <Apropos />
            <RendezVous />
            <Techno />
            <Techonologie />
            <Galerie />
           <Localisation />
         
        </>

    )

}
export default PageAccueil;

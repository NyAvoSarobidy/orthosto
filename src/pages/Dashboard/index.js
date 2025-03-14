import React from "react";
import NavBarDashboard from "./composants/navbar" 
import PageAccueil from "./PageAccueil"

function Dashboard(){

    return(
        <>
           <NavBarDashboard />
            <div className="container mt-3">
                
                <PageAccueil />
            </div>
        </>

    )



}
export default Dashboard
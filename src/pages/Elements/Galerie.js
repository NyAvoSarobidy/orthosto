
import React from "react";
import '../style/Galerie.css'
import s1 from './image/s1.jpg'
import s2 from './image/s2.jpg'
import s3 from './image/s3.jpg'
import s4 from './image/s4.jpg'
import s5 from './image/s5.jpg'
import s6 from './image/s6.jpg'
import s7 from './image/s7.jpg'
import s8 from './image/s8.jpg'

function Galerie(){
    const styles = {
        profileImage: {
          width: "500px",
          height: "300px",
     
        },
   
    };
    return(
        <div id="Galerie" className="mt-5" style={{ height :"500px"}}>
             

              <div className="container text-center border border-danger boreder-5 bg-dark p-0 mx-auto " style={{ height :"450px"}}>
   
   {/* Décommentez et utilisez le carousel si vous avez des images */}
   <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" style={{ color: "black" }} data-bs-target="#myCarousel" data-bs-slide-to="0" className="active btn btn-dark" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
     
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s1}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s2}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s3}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s4}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s5}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s6}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s7}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
       <div className="carousel-item">
         <div className="container">
           <div className="carousel-caption">
             <img
               className="img-thumbnail"
               src={s8}
               alt="Profile"
               style={styles.profileImage}
             />
           </div>
         </div>
       </div>
  
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" style={{ color: "black" }} aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div> 
 </div>
        </div>
    )

}
export default Galerie;
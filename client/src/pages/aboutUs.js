import React from 'react'
import marcelo from '../assets/Marcelo.png'

import "../styles/aboutUs.css"

const AboutUs = () => {


  return (
<>
   
    <h2 className='titulos'>Full Stack</h2>
    <div className='containerCards'>
     
      <div className="card">
        <div className="img">
          <img src={marcelo}  alt='Dani Valero'></img>
        </div>
        <span> Dani Valero</span>
        <a href='' target="_blank"> <button  >Linkedin</button></a>
      </div>
      

      <div className="card">
        <div className="img">
          <img src={marcelo}  alt='Marcelo Velasco'></img>
        </div>
        <span> Marcelo Velasco</span>
        <a href='https://www.linkedin.com/in/marcelovelasco/' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div className="card">
        <div className="img">
          <img src={marcelo}  alt='Neiva Jiménez'></img>
        </div>
        <span> Neiva Jiménez</span>
        <a href='https://www.linkedin.com/in/neiva-jim%C3%A9nez-gonz%C3%A1lez' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div  className="card">
        <div className="img">
          <img src={marcelo}  alt=' Rafa Cabezas'></img>
        </div>
        <span> Rafa Cabezas</span>
        <a href='' target="_blank"> <button  >Linkedin</button></a>
      </div>

      <div  className="card">
        <div className="img">
          <img src={marcelo}  alt='Rubén Ruiz'></img>
        </div>
        <span> Rubén Ruiz</span>
        <a href='' target="_blank"> <button  >Linkedin</button></a>
      </div>

    </div>
   

       <h2 className='titulos'>Data Science</h2>
    <div  className='containerCards'>
       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='Antonio Ambros'></img>
         </div>
         <span> Antonio Ambros</span>
         <a href='' target="_blank"> <button  >Linkedin</button></a>
       </div>

       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='Génesis Rojas'></img>
         </div>
         <span> Génesis Rojas </span>
         <a href='' target="_blank"> <button  >Linkedin</button></a>
       </div>

       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='Guillermo Martín'></img>
         </div>
         <span> Guillermo Martín</span>
         <a href='https://www.linkedin.com/in/guillermoordaz/' target="_blank"> <button  >Linkedin</button></a>
       </div>


       <div className="card">
         <div className="img">
           <img src={marcelo}  alt='María de los Ángeles Naranjo'></img>
         </div>
         <span> María de los Ángeles Naranjo</span>
         <a href='' target="_blank"> <button  >Linkedin</button></a>
       </div>

   
     </div>
     </>
  );
};

export default AboutUs;
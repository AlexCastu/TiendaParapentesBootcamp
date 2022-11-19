import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="Footer">
         <p>&copy; ParapentesAlex, 2022.Todos los derechos reservados. Proyecto creado para final de BootCamp FullStack TheBridge</p>

         <div className=" containerbotonesFooter">
            <a href="https://github.com/AlexCastu">
               <img src="https://img.icons8.com/ios-filled/25/null/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/alex-constantin-castu/">
               <img src="https://img.icons8.com/ios-glyphs/25/null/linkedin-2--v1.png" />
            </a>
         </div>
      </div>
   );
};

export default Footer;

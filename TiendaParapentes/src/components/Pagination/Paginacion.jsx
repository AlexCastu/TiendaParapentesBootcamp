import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Paginacion.css";

const Paginacion = ({ paginaAnterior, paginaSiguiente, paginaActual, paginaEnviar }) => {
   return (
      <div className="botoneraPaginacion">
         {paginaAnterior ? (
            <Button variant="outline-dark" onClick={() => paginaEnviar(paginaActual - 1)}>
               <img src="https://img.icons8.com/ios/20/null/circled-chevron-left.png" /> Pagina Anterior
            </Button>
         ) : (
            <Button variant="outline-dark" disabled>
               <img src="https://img.icons8.com/ios/20/null/circled-chevron-left.png" /> Pagina Anterior
            </Button>
         )}

         <h3>{paginaActual}</h3>
         {paginaSiguiente ? (
            <Button variant="outline-dark" onClick={() => paginaEnviar(paginaActual + 1)}>
               Pagina Sigueinte <img src="https://img.icons8.com/ios/20/null/circled-chevron-right.png" />
            </Button>
         ) : (
            <Button variant="outline-dark" disabled>
               Pagina Sigueinte <img src="https://img.icons8.com/ios/20/null/circled-chevron-right.png" />
            </Button>
         )}
      </div>
   );
};

export default Paginacion;

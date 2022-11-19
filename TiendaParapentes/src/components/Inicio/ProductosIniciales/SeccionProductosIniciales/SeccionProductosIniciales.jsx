import React from "react";
import CardProductos from "../../../CardProductos/CardProductos";

const SeccionProductosIniciales = ({ data, titulo, producto }) => {
   return (
      <div className="ContenedorSeccionProductosIniciales">
         <h2>{titulo}</h2>
         <div>
            {data.map((dato, index) => {
               return <CardProductos key={dato.modelo + index} dato={dato} index={index} producto={producto}></CardProductos>;
            })}
         </div>
      </div>
   );
};

export default SeccionProductosIniciales;

import React from "react";
import Element from "./Element/Element";

const ElementoEnLaCesta = ({ elemento, categoria, PrecioTotal, comprobarProductosEnLaCesta, eliminando }) => {
   return (
      <>
         {elemento.length > 0
            ? elemento.map((element, index) => {
                 PrecioTotal(element.price);
                 return (
                    <Element
                       key={categoria + index}
                       data={element}
                       categoria={categoria}
                       comprobarProductosEnLaCesta={comprobarProductosEnLaCesta}
                       eliminando={eliminando}
                    ></Element>
                 );
              })
            : PrecioTotal(0)}
      </>
   );
};

export default ElementoEnLaCesta;

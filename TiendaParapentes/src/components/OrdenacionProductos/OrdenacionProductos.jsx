import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, NavLink } from "react-bootstrap";
import "./OrdenacionProductos.css";

const OrdenacionProductos = ({ OrdenacionPrecio, OrdenacionMarca }) => {
   const [ordenPrecio, setOrdenPrecio] = useState(0);
   const [ordenNombre, setOrdenNombre] = useState(0);

   ordenPrecio === 3 ? setOrdenPrecio(0) : null;
   ordenNombre === 3 ? setOrdenNombre(0) : null;

   return (
      <div className="contenedorOrdenacion">
         <small>Ordenar por:</small>
         <ButtonGroup variant="outline-secondary">
            <Button
               variant=" botonOrdenacion"
               onClick={() => {
                  setOrdenPrecio(ordenPrecio + 1);
                  OrdenacionPrecio(ordenPrecio + 1);
                  setOrdenNombre(0);
               }}
            >
               Precio
               {ordenPrecio === 0 ? <img src="https://img.icons8.com/material-two-tone/20/null/euro-pound-exchange.png" /> : null}
               {ordenPrecio === 1 ? <img src="https://img.icons8.com/ios/24/null/numerical-sorting-12.png" /> : null}
               {ordenPrecio === 2 ? <img src="https://img.icons8.com/ios-filled/24/null/numerical-sorting-21.png" /> : null}
            </Button>
            <Button
               variant=" botonOrdenacion"
               onClick={() => {
                  setOrdenNombre(ordenNombre + 1);
                  OrdenacionMarca(ordenNombre + 1);
                  setOrdenPrecio(0);
               }}
            >
               Marca
               {ordenNombre === 0 ? <img src="https://img.icons8.com/pastel-glyph/24/null/alphabetical-sorting.png" /> : null}
               {ordenNombre === 1 ? <img src="https://img.icons8.com/ios-filled/24/null/alphabetical-sorting.png" /> : null}
               {ordenNombre === 2 ? <img src="https://img.icons8.com/ios-filled/24/null/alphabetical-sorting-2.png" /> : null}
            </Button>
         </ButtonGroup>
      </div>
   );
};
export default OrdenacionProductos;

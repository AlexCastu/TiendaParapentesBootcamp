import { Button, Image } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import { ContextoCesta, DatosContexto } from "../../../Contexto/ContextoCesta";

const ContenidoModal = ({ data, producto, cerrarModal }) => {
   const { setEstado } = useContext(ContextoCesta);

   const agregarElemento = () => {
      axios.get(`https://tiendaparapentes.fly.dev/tienda/agregarALaCesta?id=${data._id}&categoria=${producto}`).then((response) => {
         if (response.data.modifiedCount === 1 && response.data.matchedCount === 1) {
            setEstado(true);
            cerrarModal(true);
         }
         if (response.data.modifiedCount === 0 && response.data.matchedCount === 1) {
            cerrarModal(false);
         }
      });
   };

   const funcion = () => {
      agregarElemento();
   };

   return (
      <div className="cuerpoModal">
         <div className="containerProducto">
            <div className="">
               <Image
                  fluid
                  rounded
                  src={
                     data.img ||
                     "https://img.freepik.com/premium-vector/cute-people-playing-paragliding-cartoon-icon-illustration-people-sport-icon-concept-isolated-premium-flat-cartoon-style_138676-1552.jpg?w=826"
                  }
               ></Image>{" "}
            </div>
            <div className="datosProducto">
               <div>
                  <p>Marca:</p>
                  <h5>{data.marca._id.nombre}</h5>
               </div>
               <div>
                  <p>Modelo:</p>
                  <h5>{data.modelo}</h5>
               </div>
               {data.categoria ? (
                  <>
                     <div>
                        <p>Categoria:</p>
                        <h5> EN-{data.categoria}</h5>
                     </div>
                  </>
               ) : null}
               <div>
                  <p>Precio:</p>
                  <h5 className="precioModal">{data.price} €</h5>
               </div>
               <div className="divBotonModal">
                  <Button variant="info" onClick={funcion}>
                     Añadir a la cesta <img src="https://img.icons8.com/ios/24/null/buy--v1.png" />
                  </Button>
               </div>
            </div>
         </div>
         <div className="infoAdicional">
            <h2>Sobre {data.marca.nombre} ...</h2>
            <small>
               CIF empresa :<b>{data.marca._id.cif}</b>
            </small>
            <div>
               <img src={data.marca._id.img} />
               <p>{data.marca._id.descripcion}</p>
            </div>
         </div>
      </div>
   );
};

export default ContenidoModal;
